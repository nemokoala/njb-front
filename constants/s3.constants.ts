export const S3_CONSTANTS = {
  UPLOAD: '/images/presigned',
  IMAGE_LIST: (type: 'refrigerator' | 'ingredient') => `/images/?type=${type}`,
};
