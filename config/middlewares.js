module.exports = [
  'strapi::errors',
  'strapi::security',
  //'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:5173', '*'],
      headers: ['Authorization', '*']
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      formLimit: "256mb",
      jsonLimit: "256mb",
      textLimit: "256mb",
      formidable: {
        maxFileSize: 250 * 1024 * 1024, // 256mb in bytes
      }
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
