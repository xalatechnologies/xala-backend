import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contactForm',
  title: 'Contact Form',
  type: 'document',
  fields: [
    defineField({
      name: 'formTitle',
      title: 'Form Title',
      type: 'string',
    }),
    defineField({
      name: 'formDescription',
      title: 'Form Description',
      type: 'text',
    }),
    defineField({
      name: 'fields',
      title: 'Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Text', value: 'text' },
                  { title: 'Email', value: 'email' },
                  { title: 'Textarea', value: 'textarea' },
                ],
              },
            }),
            defineField({
              name: 'required',
              title: 'Required',
              type: 'boolean',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'locale',
      title: 'Locale',
      type: 'reference',
      to: [{ type: 'locale' }],
    }),
  ],
  preview: {
    select: {
      title: 'formTitle',
      subtitle: 'locale.title',
    },
  },
});
