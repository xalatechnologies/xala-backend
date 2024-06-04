import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 96)
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{ type: 'client' }],
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'text',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        defineField({
          name: 'features',
          title: 'Features',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Feature Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Feature Description',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'result',
      title: 'Result',
      type: 'text',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'period',
      title: 'Period',
      type: 'string',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'technology' }] }],
    }),
    // Add the new field 'services' here
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
    defineField({
      name: 'locale',
      title: 'Locale',
      type: 'reference',
      to: [{ type: 'locale' }],
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client.name',
      locale: 'locale.title',
      media: 'thumbnail'
    },
    prepare({ title, client, locale, media }) {
      return {
        title: title,
        subtitle: `${client} - ${locale}`,
        media: media
      }
    }
  },
});
