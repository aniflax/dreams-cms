module.exports = ({ env }) => {
  const cloudName = env('CLOUDINARY_NAME', env('CLOUDINARY_CLOUD_NAME'));
  const apiKey = env('CLOUDINARY_KEY', env('CLOUDINARY_API_KEY'));
  const apiSecret = env('CLOUDINARY_SECRET', env('CLOUDINARY_API_SECRET'));
  const hasCloudinaryConfig = [cloudName, apiKey, apiSecret].every(Boolean);

  return {
    upload: {
      config: hasCloudinaryConfig
        ? {
            provider: 'cloudinary',
            providerOptions: {
              cloud_name: cloudName,
              api_key: apiKey,
              api_secret: apiSecret,
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
