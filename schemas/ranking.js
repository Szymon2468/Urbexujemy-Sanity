import { AiOutlineOrderedList } from 'react-icons/ai';

export default {
  name: 'rankings',
  title: 'Ranking miejsc',
  type: 'document',
  icon: AiOutlineOrderedList,
  fields: [
    {
      name: 'title',
      title: 'Nazwa rankingu',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'ranking',
      type: 'array',
      of: [{ type: 'place' }],
      validation: (Rule) => Rule.max(10)
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
};
