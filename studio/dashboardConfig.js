export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'fifth-mic-studio',
                  apiId: 'e8fb4417-0828-404c-8a11-ba2d57d90962'
                },
                {
                  buildHookId: '5d0709a730ff2156e3660cfd',
                  title: 'Events Website',
                  name: 'fifth-mic',
                  apiId: 'b37f2e0a-4ad9-442b-8b85-76c4a442bbee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zansdomain/fifth-mic',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://fifth-mic.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
