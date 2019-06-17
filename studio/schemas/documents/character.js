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
    name: 'physical',
    title: 'Stats',
    type: 'reference',	
    to: [{type: 'physical'}]
    },
    {
      name: 'magic',
      title: 'Magic',
      type: 'reference',
      to: [{type: 'magical'}]
    }
    ]
}
