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
      type: 'string',
      title: 'Crew',
      options: {
        list: [
          {value: 'cypher', title: 'Cypher'},
          {value: 'machina', title: 'La Machina'},
          {value: 'cashrock', title: 'CashRock'},
          {value: 'clikclak', title: 'Clik Clak'},
          {value: 'nogang', title: 'Unaffiliated'}
        ]
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
