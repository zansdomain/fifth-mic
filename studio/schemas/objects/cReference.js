export default {
  name: 'cRef',
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
      media: 'character.avatar.asset'
    }
  }
}
