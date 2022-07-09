import { Faglobe } from 'react-icons/fa';

export default {
  name: 'states',
  title: 'Województwa',
  type: 'document',
  icon: Faglobe,

  fields: [
    {
      name: 'state',
      title: 'Województwo',
      type: 'string',
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'state'
    }
  }
};
