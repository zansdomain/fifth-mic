export default {
  name: 'session',
  type: 'document',
  title: 'Session',
  icon,
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
      name: 'sessionType',
      type: 'string',
      title: 'Session type',
      options: {
        list: [
          {value: 'keynote', title: 'Keynote'},
          {value: 'talk', title: 'Talk'},
          {value: 'break', title: 'Break'},
          {value: 'firesideChat', title: 'Fireside Chat'},
          {value: 'panel', title: 'Panel'}
        ]
      }
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Short summary',
      description: 'For previews, social media etc.'
    },
    {
      name: 'description',
      type: 'cbodyPortableText',
      title: 'Description'
    }
  ],
  preview: {
    select: {
      title: 'title',
      sessionType: 'sessionType',
      person: 'character.name',
      media: 'image'
    },
    prepare ({title, media, sessionType, character}) {
      return {
        title,
        media,
        subtitle: `${sessionType} ${character ? `- ${character}` : ''}`
      }
    }
  }
}
