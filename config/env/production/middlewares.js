  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            `https://storage.googleapis.com/cdkz-admin-staging-storage-bucket`
          ],
            "media-src": [
            "'self'",
            "data:",
            "blob:",
            `https://storage.googleapis.com/cdkz-admin-staging-storage-bucket`
        ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
