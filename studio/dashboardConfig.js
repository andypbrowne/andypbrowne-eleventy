export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
    //   }
    // },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61e5c2d29f4ef3d9554f8348',
                  title: 'Sanity Studio',
                  name: 'andypbrowne-eleventy-studio',
                  apiId: '7895ed6e-a323-45cf-9866-9dc4a935dd07'
                },
                {
                  buildHookId: '61e5c2d298345cd96383bf06',
                  title: 'Blog Website',
                  name: 'andypbrowne-eleventy',
                  apiId: '3f9c9da9-4e1e-491a-af0f-26dd5815a199'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andypbrowne/andypbrowne-eleventy',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://andypbrowne-eleventy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
