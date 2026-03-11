module.exports = ({ env }) => {
  const hasCloudinaryConfig = ['CLOUDINARY_NAME', 'CLOUDINARY_KEY', 'CLOUDINARY_SECRET'].every(
    (key) => env(key)
  );

  return {
    upload: {
      config: hasCloudinaryConfig
        ? {
            provider: 'cloudinary',
            providerOptions: {
              cloud_name: env('CLOUDINARY_NAME'),
              api_key: env('CLOUDINARY_KEY'),
              api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
              upload: {},
              delete: {},
            },
          }
        : {},
    },
  };
};
