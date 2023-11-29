import React from 'react';
import {
  GestureDetector,
  Gesture,
  Directions,
} from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Title,
  ListElement,
  TitleWord,
} from './WordStacksScreen.styled';
import { TWordStacksScreenNavProps, TItemData } from './WordStacksScreen.types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addWordStacks } from '../../redux/reducers/appManageSlice';
import { getWordStacksDataFun } from '../../db';

export const WordStacksScreen = (): JSX.Element => {
  const navigation = useNavigation<TWordStacksScreenNavProps>();

  const dispatch = useAppDispatch();

  const backgroundColor = useAppSelector(
    (state) => state.appManageSlice.screenBackgroundColor
  );

  const { wordStacks } = useAppSelector((state) => state.appManageSlice);

  const restoreWordStacksData = React.useCallback(async () => {
    const wordStacksData = await getWordStacksDataFun();

    let wordStackArr = [];
    for (let i = 0; i < wordStacksData[0].rows.length; i++) {
      let wordStackObj = {
        id: wordStacksData[0].rows.item(i).id,
        title_word: wordStacksData[0].rows.item(i).title_word,
      };
      wordStackArr.push(wordStackObj);
    }
    dispatch(addWordStacks(wordStackArr));
  }, []);

  React.useEffect(() => {
    if (wordStacks.length === 0) {
      restoreWordStacksData();
    }
  }, []);

  let startPoint: number;
  const flingGesture = Gesture.Fling();
  flingGesture
    .direction(Directions.RIGHT | Directions.LEFT)
    .onBegin((e) => {
      startPoint = e.absoluteX;
    })
    .onEnd((e) => {
      const directionData = startPoint - e.absoluteX;
      if (directionData < 0) {
        navigation.navigate('Home');
      }
      // if (directionData > 0) {
      //   console.log('Swipe left');
      //   navigation.navigate('Home');
      // } else if (directionData < 0) {
      //   console.log('Swipe right');
      // } else {
      //   console.log('Nothing happened!');
      // }
    });

  const renderStackList = ({ item }: { item: TItemData }) => {
    let activeEl: boolean = true;
    return (
      <ListElement activeOpacity={activeEl ? 0.2 : 1}>
        <TitleWord isActive={activeEl}>{item.title_word}</TitleWord>
      </ListElement>
    );
  };

  return (
    <GestureDetector gesture={flingGesture}>
      <Container background={backgroundColor}>
        <Title>Word stacks</Title>
        {wordStacks.length > 0 ? (
          <FlatList
            data={wordStacks}
            renderItem={renderStackList}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : null}
      </Container>
    </GestureDetector>
  );
};
