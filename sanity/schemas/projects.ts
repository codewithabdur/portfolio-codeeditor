import { defineType, defineField } from "sanity";

export default defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
        defineField({
            name: 'desc',
            title: 'Desc',
            type: 'text',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
        }),
    ],
    preview:{
        select: {
            title: 'title',
            media: 'image',
        },
    },
})