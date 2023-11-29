import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView } from 'react-native';
import {
  GestureDetector,
  Gesture,
  Directions,
} from 'react-native-gesture-handler';
import Layout from '../../components/Layout';
import {
  Container,
  Title,
  WordList,
  WordBlock,
  Word,
  Dot,
} from './WordListScreen.styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setStartTime } from '../../redux/reducers/appManageSlice';
import { updateStartTimeDataFun } from '../../db';
import { TWordListScreenNavProps } from './WordListScreen.types';
import { TWordDefifnition } from '../../redux/reducers/appManageSlice/appManageSlice.types';
import Timer from '../../components/Timer';

export const WordListScreen = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<TWordListScreenNavProps>();

  const { wordStacks, wordStackInReview, wordDefinitions } = useAppSelector(
    (state) => state.appManageSlice
  );

  const title = wordStacks[wordStackInReview.wordStack as number].title_word;

  let startPoint: number;
  const flingGesture = Gesture.Fling();
  flingGesture
    .direction(Directions.RIGHT | Directions.LEFT)
    .onBegin((e) => {
      startPoint = e.absoluteX;
    })
    .onEnd(async (e) => {
      const directionData = startPoint - e.absoluteX;
      if (directionData < 0) {
        // dispatch(setStartTime(null));
        // await updateStartTimeDataFun(null);
        navigation.navigate('StartLessonScreen');
      } else if (directionData > 0) {
        // console.log('Swipe right');
        navigation.navigate('WordDefinitionsScreen', { wordId: 1 });
      } else {
        // console.log('Nothing happened!');
      }
    });

  return (
    <GestureDetector gesture={flingGesture}>
      <Layout>
        <Timer />
        <ScrollView alwaysBounceHorizontal={false} horizontal={false}>
          <Container>
            <Title>{title}</Title>
            <WordList>
              {wordDefinitions.map((item, index) => (
                <WordBlock key={index}>
                  <Word>{item.word}</Word>
                  {index !== wordDefinitions.length - 1 ? <Dot /> : null}
                </WordBlock>
              ))}
            </WordList>
          </Container>
        </ScrollView>
      </Layout>
    </GestureDetector>
  );
};
