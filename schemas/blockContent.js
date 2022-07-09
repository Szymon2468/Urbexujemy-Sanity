export default {
  name: 'blockContent',
  title: 'Zawartość bloku (XD)',
  type: 'array',
  of: [
    {
      type: 'block'
    },
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'Tekst alternatywny',
          options: { isHighlighted: true },
          validation: (Rule) => Rule.required()
        }
      ]
    }
  ]
};
