import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from "react-icons/md";
import { AiOutlineAudio } from "react-icons/ai";
import { FiFeather} from "react-icons/fi";

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'podcast', 'podcastCatetory', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Posts')
        .icon('FiFeather')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Posts')),
      S.listItem()
        .title('Podcasts')
        .icon(AiOutlineAudio)
        .schemaType('podcast') 
        .child(S.documentTypeList('podcast').title('Podcasts')),
      // S.listItem()
      //   .title('Authors')
      //   .icon(MdPerson)
      //   .schemaType('author')
      //   .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.divider(),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
