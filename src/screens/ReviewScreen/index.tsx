import React from 'react';
import { useNavigation } from '@react-navigation/native';
// import { View, Text } from 'react-native';
import {
  GestureDetector,
  Gesture,
  Directions,
} from 'react-native-gesture-handler';
import { TReviewScreenNavProps } from './ReviewScreen.types';
import { Container, Title } from './ReviewScreen.styled';
import { useAppSelector } from '../../redux/hooks';

export const ReviewScreen = (): JSX.Element => {
  const navigation = useNavigation<TReviewScreenNavProps>();

  const backgroundColor = useAppSelector(
    (state) => state.appManageSlice.screenBackgroundColor
  );

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
        console.log('Swipe Right');
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

  return (
    <GestureDetector gesture={flingGesture}>
      <Container background={backgroundColor}>
        <Title>Review Screen</Title>
      </Container>
    </GestureDetector>
  );
};
