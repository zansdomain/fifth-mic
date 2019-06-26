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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
  {
      name: 'posse',
      type: 'array',
      title: 'Crew',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
    name: 'physical',
    title: 'Stats',
    type: 'array',	
    of: [{type: 'physical'}]
    },
    {
      name: 'magic',
      title: 'Magic',
      type: 'array',
      of: [{type: 'magic'}]
    },
         {
      name: 'bio',
      type: 'cbioPortableText',
      title: 'Who am I?'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'avatar'
    }
  }
}
