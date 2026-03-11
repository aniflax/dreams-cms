module.exports = ({ env }) => {
  const allowedOrigins = [
    env('FRONTEND_URL', 'https://dreamfurnitures.com'),
    env('FRONTEND_WWW_URL', 'https://www.dreamfurnitures.com'),
    env('FRONTEND_PREVIEW_URL'),
    'http://localhost:3000',
    'http://127.0.0.1:3000',
  ].filter(Boolean);

  return [
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    {
      name: 'strapi::cors',
      config: {
        origin: allowedOrigins,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
        headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
        keepHeaderOnError: true,
      },
    },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];
};
