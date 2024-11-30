export const avatar = require('../images/avatar.png');
export const banner = require('../images/banner.png');
export const brazil = require('../images/brazil.jpg');
export const usa = require('../images/usa.webp');
export const player = require('../images/player.webp');

export const images = {
  avatar,
  banner,
  usa,
  brazil,
  player,
};

export type Image = keyof typeof images;

export const getImage = (imageKey: Image): string => {
  return images[imageKey];
};
