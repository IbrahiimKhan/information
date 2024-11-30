export const avatar = require('../images/avatar.png');
export const banner = require('../images/banner.jpg');
export const brazil = require('../images/brazil.jpg');
export const usa = require('../images/usa.webp');

export const images = {
  avatar,
  banner,
  usa,
  brazil,
};

export type Image = keyof typeof images;

export const getImage = (imageKey: Image): string => {
  return images[imageKey];
};
