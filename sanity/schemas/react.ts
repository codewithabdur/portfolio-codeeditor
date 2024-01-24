import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'react',
  title: 'React',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    // defineField({
    //   name: 'image',
    //   title: 'Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'text',
      
    }),
    defineField({
      name: 'desc',
      title: 'Desc',
      type: 'string',
      
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
