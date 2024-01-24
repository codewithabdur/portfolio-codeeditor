import { defineType, defineField } from "sanity";

export default defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'desc',
            title: 'Desc',
            type: 'string'
        }),
        defineField({
            name: 'bg',
            title: 'Bg',
            type: 'image'
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image'
        }
    }
})