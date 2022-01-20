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
            title: 'mainImage',
            group: 'main'
        },
        {
            name: 'category',
            type: 'reference',
            title: 'Category',
            group: 'details',
            to: [{type: 'podcastCategory'}]
        },
        {
            name: 'description',
            type: 'excerptPortableText',
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
            title: 'Favorite episodes',
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
        title: 'name',
        slug: 'slug',
        media: 'image',
    }, 
    prepare({title = 'No title', media}) {
        return {
            title,
            media
        }
    }
}