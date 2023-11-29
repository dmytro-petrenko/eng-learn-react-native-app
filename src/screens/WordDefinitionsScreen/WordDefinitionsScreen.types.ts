import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App.types';

export type TWordDefinitionsScreenNavProps = StackNavigationProp<
  RootStackParamList,
  'WordListScreen',
  'WordDefinitionsScreen'
>;

export type ParamList = {
    WordDefinitionsScreen: {
      wordId: number;
    };
  };
  