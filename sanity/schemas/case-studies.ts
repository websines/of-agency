export default {
    name: 'caseStudy',
    title: 'Case Studies',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'overview',
        title: 'Overview',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // If you want to enable hotspot for the image
        },
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'block' }, {
            type: 'image', 
            fields: [{
                type:'text',
                name:'alt',
                title: 'Alt'
            }]
        }],
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // You can set the maximum length of the slug if desired
        },
      },
    ],
  };
  