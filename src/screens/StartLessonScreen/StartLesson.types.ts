import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App.types';

export type TStartLessonScreenNavProps = StackNavigationProp<
  RootStackParamList,
  'Home',
  'WordListScreen'
>;
