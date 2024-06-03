import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'translation',
  title: 'Translation',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Key',
      type: 'string',
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
    }),
    defineField({
      name: 'locale',
      title: 'Locale',
      type: 'reference',
      to: [{ type: 'locale' }],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Home', value: 'home'},
          {title: 'About', value: 'about'},
          {title: 'Services', value: 'services'},
          {title: 'Contact', value: 'contact'},
          {title: 'Blog', value: 'blog'},
          {title: 'News', value: 'news'},
          {title: 'Case Study', value: 'caseStudies'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'key',
      subtitle: 'locale',
    },
  },
})
