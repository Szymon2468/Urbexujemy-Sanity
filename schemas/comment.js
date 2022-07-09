import { BiCommentDetail } from 'react-icons/bi';

export default {
  name: 'comments',
  title: 'Komentarze',
  type: 'document',
  icon: BiCommentDetail,
  fields: [
    {
      name: 'approved',
      title: 'Approved',
      type: 'boolean'
    },
    {
      name: 'author',
      title: 'Autor komentarza',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'rating',
      title: 'Ocena',
      type: 'number',
      validation: (Rule) => Rule.required(),
      validation: (Rule) => Rule.max(10),
      validation: (Rule) => Rule.min(1)
    },
    {
      name: 'place',
      title: 'Miejscówka',
      type: 'reference',
      to: { type: 'place' },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'comment',
      title: 'Komentarz',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'comment.author'
    }
  }
};
