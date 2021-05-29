import { MdLocalPizza as icon } from 'react-icons/md'

export default {
    //computer name
    name: 'pizza',
    //visible title
    title: 'Pizzas',
    type: 'document',
    icon,
    fields: [
        {
            name: 'pizza',
            title: 'Pizza Name',
            type: 'string',
            description: 'Name of the Pizza'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100 
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'price',
            title: 'Pizza Price',
            type: 'number',
            description: 'Price of the Pizza in cents',
            validation: Rule => Rule.min(1000).max(50000)
        },
    ]

}