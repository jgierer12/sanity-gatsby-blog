export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5dca9305020d4cb1c2dc649c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-13qs3hjs',
                  apiId: '922f1b01-cd07-4298-91f5-5e5e3695492a'
                },
                {
                  buildHookId: '5dca930557c1477250bbe2ce',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-67se5rfn',
                  apiId: '0006d26b-adf9-46b8-8cf0-0f4c8b76ede6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jgierer12/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-67se5rfn.netlify.com', category: 'apps'}
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
