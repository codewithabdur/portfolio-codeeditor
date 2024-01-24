import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'developer',
      title: 'Developer',
      type: 'string',
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'bg',
      title: 'Bg',
      type: 'image',
    }),
    defineField({
      name: 'phonebg',
      title: 'Phonebg',
      type: 'image',
    }),
],
  preview: {
    select: {
      title: 'username',
      media: 'image',
    },
  },
})