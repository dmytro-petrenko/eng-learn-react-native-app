import React from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  GestureDetector,
  Gesture,
  Directions,
} from 'react-native-gesture-handler';
import {
  Wrapper,
  Container,
  TitleWord,
  BtnBlock,
} from './StartLessonScreen.styled';
import { TStartLessonScreenNavProps } from './StartLesson.types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  setStartTime,
  addWordStacks,
  setWordStackInReview,
  addWordDefinitions,
} from '../../redux/reducers/appManageSlice';
import StyledButton from '../../components/StyledButton';
import Layout from '../../components/Layout';
import Timer from '../../components/Timer';
import {
  getWordStacksDataFun,
  getWordStackInReviewFun,
  updateStartTimeDataFun,
  // createStartTimeFun,
  // addStartTimeDataFun,
  getStartTimeDataFun,
  getWordDefDataCurrStackFun,
} from '../../db';

export const StartLessonScreen = (): JSX.Element => {
  const navigation = useNavigation<TStartLessonScreenNavProps>();
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { wordStacks, wordStackInReview, startTime } = useAppSelector(
    (state) => state.appManageSlice
  );
  console.log('wordStackInReview: ', wordStackInReview);

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
        dispatch(setStartTime(null));
        await updateStartTimeDataFun(null);
        navigation.navigate('Home');
      } else if (directionData > 0) {
        navigation.navigate('WordListScreen');
      }
    });

  const restoreStartTime = React.useCallback(async () => {
    const startTimeData = await getStartTimeDataFun();

    dispatch(setStartTime(startTimeData[0].rows.item(0).startTimeVal));
  }, []);

  const restoreWordStacks = React.useCallback(async () => {
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

  const restoreWordStackInReview = React.useCallback(async () => {
    const wordStackInReviewData = await getWordStackInReviewFun();

    dispatch(
      setWordStackInReview({
        wordStack: wordStackInReviewData[0].rows.item(0).wordStack,
        countDown: wordStackInReviewData[0].rows.item(0).countdown,
      })
    );
  }, []);

  const getWordDefinitions = React.useCallback(async (id: number) => {
    const wordDefResponse = await getWordDefDataCurrStackFun(id);
    // console.log('wordDefResponse: ', wordDefResponse[0].rows.item(0))
    let wordDefArr = [];
    for (let i = 0; i < wordDefResponse[0].rows.length; i++) {
      let wordDefinitionObj = {
        id: wordDefResponse[0].rows.item(i).id,
        word: wordDefResponse[0].rows.item(i).word,
        adjective: JSON.parse(wordDefResponse[0].rows.item(i).adjective),
        adverb: JSON.parse(wordDefResponse[0].rows.item(i).adverb),
        noun: JSON.parse(wordDefResponse[0].rows.item(i).noun),
        verb: JSON.parse(wordDefResponse[0].rows.item(i).verb),
        modification: JSON.parse(wordDefResponse[0].rows.item(i).modification),
        idiom: JSON.parse(wordDefResponse[0].rows.item(i).idiom),
        image: wordDefResponse[0].rows.item(i).image,
        stack_id: 2,
      };
      wordDefArr.push(wordDefinitionObj);
    }
    dispatch(addWordDefinitions(wordDefArr));
  }, []);

  React.useEffect(() => {
    if (!title) {
      restoreStartTime();
      restoreWordStacks();
      restoreWordStackInReview();
    }
    if (wordStackInReview.wordStack !== null) {
      const stack_id = (wordStackInReview.wordStack as number) + 1;
      getWordDefinitions(stack_id);
    }
  }, []);

  React.useEffect(() => {});

  const startBtnHandler = async () => {
    if (startTime) {
      dispatch(setStartTime(null));
      await updateStartTimeDataFun(null);
    } else {
      let stTime = new Date().getTime();
      dispatch(setStartTime(stTime));
      await updateStartTimeDataFun(stTime);
    }

    // await createStartTimeFun();
    // await addStartTimeDataFun(null);
    // const startTimeData = await getStartTimeDataFun();
    // console.log('StartTime: ', startTimeData[0].rows.item(0).startTimeVal)
    // console.log('StartTime all: ', startTimeData[0].rows.length)
  };

  const onRefresh = async () => {
    setRefreshing(true);
    setIsError(false);

    try {
      const wordStacksData = await getWordStacksDataFun();
      const wordStackInReviewData = await getWordStackInReviewFun();

      let wordStackArr = [];
      for (let i = 0; i < wordStacksData[0].rows.length; i++) {
        let wordStackObj = {
          id: wordStacksData[0].rows.item(i).id,
          title_word: wordStacksData[0].rows.item(i).title_word,
        };
        wordStackArr.push(wordStackObj);
      }
      dispatch(addWordStacks(wordStackArr));

      dispatch(
        setWordStackInReview({
          wordStack: wordStackInReviewData[0].rows.item(0).wordStack,
          countDown: wordStackInReviewData[0].rows.item(0).countdown,
        })
      );
      dispatch(setStartTime(null));
      updateStartTimeDataFun(null);
    } catch (error) {
      setIsError(true);
    }
    setRefreshing(false);
  };

  return (
    <GestureDetector gesture={flingGesture}>
      <Layout>
        <Timer />
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Wrapper>
            <Container>
              {isError ? (
                <View>
                  <Text>Failed to load data.</Text>
                </View>
              ) : (
                <React.Fragment>
                  {/* <ContentContainer> */}
                  <TitleWord>{title}</TitleWord>
                  <BtnBlock>
                    <StyledButton
                      isDisabled={false}
                      type="start"
                      onPress={startBtnHandler}
                    >
                      {startTime ? 'Stop' : 'Start'}
                    </StyledButton>
                  </BtnBlock>
                  {/* </ContentContainer> */}
                </React.Fragment>
              )}
            </Container>
          </Wrapper>
        </ScrollView>
      </Layout>
    </GestureDetector>
  );
};
