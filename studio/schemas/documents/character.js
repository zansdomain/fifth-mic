// character.js

export default {
  type: 'document',
  name: 'character',
  title: 'Character',
  fields: [
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image'
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },


    {
      name: 'posse',
      type: 'array',
      title: 'Crew',
      of: [{type: 'string'}]
      options: {
        layout: 'tags'
      }
    },
   


    {
    name: 'physical',
    title: 'Stats',
    type: 'reference',	
    to: [{type: 'physical'}]
    },
    {
      name: 'magic',
      title: 'Magic',
      type: 'reference',
      to: [{type: 'mystic'}]
    }
    ]
}
