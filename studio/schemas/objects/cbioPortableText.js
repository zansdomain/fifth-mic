export default {
  name: 'cbioPortableText',
  type: 'array',
  title: 'Who am I?',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [{title: 'Normal', value: 'normal'}],
      lists: [],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'}
        ]
      }
    }
  ]
}
