import {format} from 'date-fns'
import { FiFeather } from 'react-icons/fi'

export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  icon: FiFeather,
  groups: [
    {
      name: 'main',
      title: 'Main',
    },
    {
      name: 'content',
      title: 'Content'
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
      group: 'main',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      group: 'main',
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
      group: 'main',
      options: {
        dateFormat: 'YYY-MM-DD',
        calendarTodayLabel: 'today'
      }
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image',
      group: 'main',
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categorie(s)',
      group: 'content',
      of: [
        {
          type: 'reference',
          to: {
            type: 'bookCategory'
          }
        }
      ]
    },
    {
      title: 'Case Study',
      name: 'isCaseStudy',
      type: 'boolean',
      group: 'main'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      group: 'content',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    },
    {
      title: 'Overview',
      name: 'overview',
      type: 'excerptPortableText',
      description: 'Summary of company or product',
      hidden: ({document}) => !document?.isCaseStudy,
      group: 'content'
    },
    {
      title: 'Problem Statement',
      name: 'problemStatement',
      type: 'excerptPortableText',
      description: 'Why did it need to happen?',
      hidden: ({document}) => !document?.isCaseStudy,
      group: 'content'
    },
    {
      title: 'Audience',
      name: 'audience',
      type: 'excerptPortableText',
      description: 'Who is it for?',
      hidden: ({document}) => !document?.isCaseStudy,
      group: 'content'
    },
    {
      title: 'Role',
      name: 'role',
      type: 'excerptPortableText',
      description: 'What did you do, who else worked on it',
      hidden: ({document}) => !document?.isCaseStudy,
      group: 'content'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body or process',
      group: 'content',
      options: {
        spellCheck: true,
      },
    },
    {
      title: 'Results',
      name: 'results',
      type: 'excerptPortableText',
      description: 'What happened in the end, goals achieved, lessons learned',
      hidden: ({document}) => !document?.isCaseStudy,
      group: 'content'
    }
  ],
  initialValue: {
    isCaseStudy: false
  },
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
