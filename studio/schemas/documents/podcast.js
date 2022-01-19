export default {
    name: 'podcast',
    type: 'document',
    title: 'Podcast',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'slug',
            description: 'Some frontends will require a slug to be set to be able to show the post',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'mainImage',
            type: 'mainImage',
            title: 'mainImage',
        },
        {
            name: 'description',
            type: 'excerptPortableText',
            title: 'Description',

        }
    ]
}