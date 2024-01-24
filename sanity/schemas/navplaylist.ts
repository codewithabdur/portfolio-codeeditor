import { defineField, defineType } from "sanity";

export default defineType({
    name: 'navplaylist',
    title: 'Navplaylist',
    type: 'document',
    fields: [
        defineField({
            name: 'playlistname',
            title: 'Playlistname',
            type: 'string'
        }),
        defineField({
            name: 'url',
            title: 'Url',
            type: 'url'
        })
    ],
     preview: {
    select: {
      title: 'playlistname',
      media: 'image',
    },
  },
})