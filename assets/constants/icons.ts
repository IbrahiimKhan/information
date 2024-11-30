import board from '@assets/icons/board.svg';
import filter from '@assets/icons/filter.svg';
import news from '@assets/icons/news.svg';
import notification from '@assets/icons/notification.svg';
import rank from '@assets/icons/rank.svg';
import register from '@assets/icons/register.svg';
import {FC} from 'react';
import {SvgProps} from 'react-native-svg';

export const icons = {
  //put icons here
  notification,
  registerStack: register,
  boardStack: board,
  rankStack: rank,
  newsStack: news,
  filter,
};

export type Icon = keyof typeof icons;

export const getIcon = (iconKey: Icon): FC<SvgProps> => {
  return icons[iconKey];
};
