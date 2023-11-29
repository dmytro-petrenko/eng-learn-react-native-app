import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App.types';

export type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'WordStacksScreen' | 'StartLessonScreen' | 'ReviewScreen'
>;
