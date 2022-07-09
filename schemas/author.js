export default {
  name: 'authors',
  title: 'Autorzy artykułów',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Imię i nazwisko',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: { hotspot: true },
      fileds: [
        {
          name: 'alt',
          title: 'Alternatywny tekst',
          type: 'string',
          options: { isHighligjted: true },
          validation: (Rule) => Rule.required()
        }
      ]
    }
  ]
};
