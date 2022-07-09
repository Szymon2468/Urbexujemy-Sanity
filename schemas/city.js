import { Faglobe } from 'react-icons/fa';

export default {
  name: 'cities',
  title: 'Miasta',
  type: 'document',
  icon: Faglobe,

  fields: [
    {
      name: 'city',
      title: 'Miasto',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'state',
      title: 'Województwo',
      type: 'reference',
      to: { type: 'states' },
      validation: (Rule) => Rule.required()
    }
  ],

  preview: {
    select: {
      title: 'city'
    }
  }
};
