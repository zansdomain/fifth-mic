export default {
  name: 'session',
  type: 'document',
  title: 'Session',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'characters',
      type: 'array',
      title: 'Characters',
      description: 'Who is responsible for this session?',
      of: [
        {
          name: 'character',
          type: 'cRef',
          title: 'Character'
        }
      ]
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Short summary',
      description: 'For previews, social media etc.'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description'
    }
  ],
  preview: {
    select: {
      title: 'title',
      person: 'character.name',
      media: 'image'
    },
    prepare ({title, media, character}) {
      return {
        title,
        media,
        subtitle: `${character ? `- ${character}` : ''}`
      }
    }
  }
}
