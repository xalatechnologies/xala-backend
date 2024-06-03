import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'locale',
  title: 'Locale',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Flag Icon',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'code',
    },
  },
});
