export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f73726d29a7930ed7108dfe',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-k4fhohj4',
                  apiId: '76317dba-b84a-4df9-b943-67ceef3f6e60'
                },
                {
                  buildHookId: '5f73726d29a7930f2d108d86',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-78su7jrz',
                  apiId: 'df7f10a1-7ee9-4592-80cc-5e43e04c0dad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lionhouse/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-78su7jrz.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
