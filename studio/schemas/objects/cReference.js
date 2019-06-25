export default {
  name: 'cReference',
  type: 'object',
  title: 'Character reference',
  fields: [
    {
      type: 'reference',
      name: 'character',
      to: [
        {
          type: 'character'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'character.name',
      media: 'character.image.asset'
    }
  }
}
