import {format} from 'date-fns'
import { FiFeather } from 'react-icons/fi'

export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  icon: FiFeather,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedDate',
      type: 'date',
      title: 'Published Date',
      description: 'This can be used to schedule post for publishing',
      options: {
        dateFormat: 'YYY-MM-DD',
        calendarTodayLabel: 'today'
      }
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    },
    // {
    //   name: 'authors',
    //   title: 'Authors',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'authorReference'
    //     }
    //   ]
    // },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedDate',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedDate',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedDate: 'publishedDate',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title', publishedDate, slug = {}, media}) {
      const dateSegment = format(publishedDate, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedDate ? path : 'Missing publishing date'
      }
    }
  }
}
