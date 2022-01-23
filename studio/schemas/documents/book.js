import {LinkIcon} from "@sanity/icons"
import { FiBook } from 'react-icons/fi'

export default {
    name: 'book',
    type: 'document',
    title: 'Book',
    icon: FiBook,
    groups: [
        {
            name:  'main',
            title: 'Main'
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
            name: 'subTitle',
            type: 'string',
            title: 'Subtitle',
            group: 'main'
        },
        {
            name: 'bookAuthor',
            type: 'string',
            title: 'Author',
            group: 'main'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            group: 'main',
            options: {
              source: 'title',
              maxLength: 96
              }
        },
        {
            name: 'image',
            type: 'mainImage',
            title: 'Image',
            group: 'main'
        },
        {
            name: 'category',
            type: 'reference',
            title: 'Category',
            group: 'details',
            to: [{type: 'bookCategory'}]
        },
        {
            name: 'whenRead',
            type: 'date',
            title: 'When read',
            group: 'details',
            description: 'When did you start reading this book',
            options: {
              dateFormat: "YYYY-MM-DD",
              calendarTodayLabel: 'Today'
            }
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'rating', // Required
            description: 'Apply a rating out of 5 stars',
            group: 'details',
            options: {
              stars: 5, // Optional. Default 5.
            }
        },
        {
            name: 'review',
            title: 'Review',
            type: 'bodyPortableText',
            group: 'details'
        },
        {
            name: 'bookLinks',
            type: 'array',
            title: 'Book links',
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
          category: 'category.title',
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