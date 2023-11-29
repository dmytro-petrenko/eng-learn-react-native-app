import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App.types';

export type TWordListScreenNavProps = StackNavigationProp<
  RootStackParamList,
  'StartLessonScreen',
  'WordListScreen'
>;
