import {LinkIcon} from "@sanity/icons"

export default {
    name: 'podcast',
    type: 'document',
    title: 'Podcast',
    groups: [
        {
            name: 'main',
            title: 'Main',
        },
        {
            name: 'details',
            title: 'Details'
        }
    ],
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            group: 'main'
        },
        {
            name: 'image',
            type: 'mainImage',
            title: 'Image',
            group: 'main'
        },
        {
            title: 'Podcast Category',
            name: 'specialCategory',
            type: 'string',
            group: 'details',
            options: {
              list: [
                {value: 'morningCommute', title: 'Morning Commute'},
                {value: 'roadTripping', title: 'Road Tripping'},
                {value: 'sleepAids', title: 'Sleep Aids'}
              ]
            },
        },
        {
            name: 'description',
            type: 'bodyPortableText',
            title: 'Description',
            description: 'What is this podcast about and why should someone listen',
            group: 'details'
        },
        {
            name: 'podcastLink',
            type: 'url',
            title: 'Podcast link',
            description: 'Provide a url to the official podcast website',
            icon: LinkIcon,
            group: 'details'
        },
        {
            name: 'podcastEpisodes',
            type: 'array',
            title: 'Favorite episode(s)',
            group: 'details',
            of: [
                {
                    type: 'link',
                    title: 'Link',
                    icon: LinkIcon
                }
            ]
        }
    ],
    preview: {
      select: {
          title: 'title',
          media: 'image',
          category: 'specialCategory',
      },
      prepare(selection) {
        const {title, media, category} = selection
        return {
          title,
          media,
          subtitle: `Category: ${category ? category : 'none'}`
        }
      }
    }
}