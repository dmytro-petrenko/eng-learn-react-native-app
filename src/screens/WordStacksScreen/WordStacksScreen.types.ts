import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App.types';

export type TWordStacksScreenNavProps = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type TItemData = {
  id: number;
  title_word: string;
};
