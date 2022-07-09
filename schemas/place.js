import { FaCity } from 'react-icons/fa';

export default {
  name: 'place',
  title: 'Miejsce',
  type: 'document',
  icon: FaCity,
  fields: [
    {
      name: 'placeName',
      title: 'Nazwa miejsca',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'city',
      title: 'Miasto',
      type: 'reference',
      to: { type: 'cities' },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'coords',
      title: 'Koordynaty',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'ourRating',
      title: 'Nasza Ocena',
      type: 'number',
      validation: (Rule) => Rule.required(),
      validation: (Rule) => Rule.max(10),
      validation: (Rule) => Rule.min(1)
    },
    {
      name: 'date',
      title: 'Data odwiedzin',
      type: 'date',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Krótki opis',
      type: 'text',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.max(500).warning(
          'Opis jest za długi. Powinien zawierać maksymalnie 500 znaków.'
        )
    },
    {
      name: 'article',
      title: 'Artykuł',
      type: 'reference',
      to: { type: 'articles' }
    },
    {
      name: 'photos',
      title: 'Zdjęcia',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              type: 'string',
              name: 'alt',
              title: 'Alt',
              description: 'Tekst alternatywny dla osób niewidomych',
              options: { isHighlighted: true },
              validation: (Rule) => Rule.required()
            }
          ]
        }
      ],
      validation: (Rule) => {
        Rule.required(), Rule.max(3);
      }
    }
  ],

  preview: {
    select: {
      title: 'placeName'
    }
  }
};
