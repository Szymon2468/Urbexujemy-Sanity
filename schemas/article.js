import { RiArticleLine } from 'react-icons/ri';

export default {
  name: 'articles',
  title: 'Artykuły',
  type: 'document',
  icon: RiArticleLine,
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'seoDesc',
      type: 'string',
      title: 'SEO description',
      desription:
        'SEO description should describe article for Google Web Search Engine.',
      validation: (Rule) =>
        Rule.max(250).warning(
          "SEO description shouldn't be more than 250 characters."
        ),
      validation: (Rule) => Rule.required()
    },
    {
      name: 'seoKeyWords',
      title: 'Key words',
      type: 'array',
      description: 'Key words for an article for Google Web Search Engine.',
      of: [
        {
          type: 'string',
          validation: (Rule) =>
            Rule.max(50).warning(
              "A single key word shouldn't be more than 50 characters."
            )
        }
      ],
      validation: (Rule) => Rule.required(),
      validation: (Rule) => Rule.unique()
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: { type: 'authors' },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Główne zdjęcie',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternatywny tekst',
          type: 'string',
          validation: (Rule) => Rule.required()
        }
      ],
      validation: (Rule) => Rule.required()
    },

    {
      name: 'teaser',
      title: 'Tizer',
      type: 'text',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'place',
      title: 'Miejsce',
      type: 'reference',
      to: { type: 'place' },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'content',
      title: 'Zawartość',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'date',
      title: 'Data publikacji',
      type: 'date',
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `od ${author}`
      });
    }
  }
};
