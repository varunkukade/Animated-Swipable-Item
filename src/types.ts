import {ETouchableType} from './constants';

export type TTouchable = {
  id: number;
  title: string;
  width: number;
};

export type TItem = {
  id: number;
  title: string;
  singer: string;
  imageSrc: string;
  leftTouchables: TTouchable[];
  rightTouchables: TTouchable[];
  type: ETouchableType;
};

export type TListItem = {
  item: TItem;
};
export type NullableNumber = null | number;
