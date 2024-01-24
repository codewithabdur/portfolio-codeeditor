import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'navbar',
    title: 'Navbar',
    type: 'document',
    fields: [
        defineField({
            name: 'username',
            title: 'Username',
            type: 'string',
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
        }),
        defineField({
            name: 'logolink',
            title: 'Logolink',
            type: 'url',
        }),
    ],
    preview: {
    select: {
      title: 'username',
      media: 'image',
    },
  },
})