import { IStack } from './stacks.types';
import foundlingStack from './foundlingStack';
import fraternalStack from './fraternalStack';
import friableStack from './friableStack';

const stacks: IStack[] = [
  {
    title: 'foundling',
    list: foundlingStack,
  },
  {
    title: 'fraternity',
    list: fraternalStack,
  },
  {
    title: 'friable',
    list: friableStack,
  },
];
export default stacks;