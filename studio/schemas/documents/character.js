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
      of: [{type: 'mystic'}]
    },
    {
       name: 'soundclip',
       title: 'Sound Clip',
       type: 'file',
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
      media: 'avatar', 'soundclip'
    }
}
