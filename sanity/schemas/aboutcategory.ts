import { defineType, defineField } from "sanity";

export default defineType({
    name: 'aboutcategory',
    title: 'Aboutcategory',
    type: 'document',
    fields: [
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string',
        }),
        defineField({
            name: 'details',
            title: 'Details',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
      }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        }
    }
})