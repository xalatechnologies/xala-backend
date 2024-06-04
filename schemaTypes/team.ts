import { defineType, defineField } from "sanity";

export default defineType({
    name: 'team',
    title: 'Team Member',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
      }),
      defineField({
        name: 'position',
        title: 'Position',
        type: 'string',
      }),
      defineField({
        name: 'bio',
        title: 'Bio',
        type: 'text',
      }),
      defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'contactDetails',
        title: 'Contact Details',
        type: 'object',
        fields: [
          defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
          }),
          defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
          }),
        ],
      }),
      defineField({
        name: 'socialMedia',
        title: 'Social Media Links',
        type: 'object',
        fields: [
          defineField({
            name: 'linkedin',
            title: 'LinkedIn',
            type: 'url',
          }),
          defineField({
            name: 'twitter',
            title: 'Twitter',
            type: 'url',
          }),
          defineField({
            name: 'portfolio',
            title: 'Portfolio',
            type: 'url',
          }),
        ],
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
        title: 'name',
        subtitle: 'position',
        media: 'image',
      },
    },
  });
  