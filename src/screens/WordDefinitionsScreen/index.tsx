import React from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import {
  GestureDetector,
  Gesture,
  Directions,
} from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import {
  TWordDefinitionsScreenNavProps,
  ParamList,
} from './WordDefinitionsScreen.types';
import { Container, Title, StyledImage } from './WordDefinitionsScreen.styled';
import Layout from '../../components/Layout';
import Timer from '../../components/Timer';
import WordType from '../../components/WordType';
import { useAppSelector } from '../../redux/hooks';

export const WordDefinitionsScreen = (): JSX.Element => {
  const navigation = useNavigation<TWordDefinitionsScreenNavProps>();
  const route = useRoute<RouteProp<ParamList, 'WordDefinitionsScreen'>>();

  const wordDefinitions = useAppSelector(
    (state) => state.appManageSlice.wordDefinitions
  );
  const wordDefObj = wordDefinitions[route.params.wordId - 1];

  const titleWord = wordDefObj.word;

  const imgLink: string = `./src/assets${wordDefObj.image}`;

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
        if (route.params.wordId === 1) {
          navigation.navigate('WordListScreen');
        } else {
          navigation.push('WordDefinitionsScreen', {
            wordId: route.params.wordId - 1,
          });
        }
      } else if (directionData > 0) {
        navigation.push('WordDefinitionsScreen', {
          wordId: route.params.wordId + 1,
        });
      }
    });

  return (
    <GestureDetector gesture={flingGesture}>
      <Layout>
        <Timer />
        <Container>
          <Title>{titleWord}</Title>

          <View>
            {wordDefObj.adjective.length > 0 ? (
              <WordType
                type="Adj"
                color="rgb(0, 112, 152)"
                definitionArr={wordDefObj.adjective}
              />
            ) : null}

            {wordDefObj.adverb.length > 0 ? (
              <WordType
                type="Adv"
                color="rgb(16, 2, 98)"
                definitionArr={wordDefObj.adverb}
              />
            ) : null}

            {wordDefObj.noun.length > 0 ? (
              <WordType
                type="Noun"
                color="rgb(255, 192, 0)"
                definitionArr={wordDefObj.noun}
              />
            ) : null}

            {wordDefObj.verb.length > 0 ? (
              <WordType
                type="Verb"
                color="rgb(0, 176, 80)"
                definitionArr={wordDefObj.verb}
              />
            ) : null}

            {wordDefObj.modification.length > 0 ? (
              <WordType
                type="Mod"
                color="rgb(128, 96, 0)"
                definitionArr={wordDefObj.modification}
              />
            ) : null}

            {wordDefObj.idiom.length > 0 ? (
              <WordType
                type="Idiom"
                color="rgb(255, 153, 204)"
                definitionArr={wordDefObj.idiom}
              />
            ) : null}

            {/* {wordDefObj.image ? <StyledImage source={imageLink} /> : null} */}
          </View>
        </Container>
      </Layout>
    </GestureDetector>
  );
};
