import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Modal } from 'react-native';
import StyledButton from '../../components/StyledButton';
import { HomeScreenNavigationProps } from './HomeScreen.types';
import {
  Container,
  HeaderBlock,
  InstructionBtnBlock,
  ButtonsContainer,
  ButtonBlock,
} from './HomeScreen.styled';
import InstructionModal from '../../components/modals/InstructionModal';
import SettingsDropdown from '../../components/SettingsDropDown';
import {
  connectionToDatabase,
  addWordStackDataFun,
  addWordDefinitionDataFun,
  getWordStacksDataFun,
  getWordDefDataCurrStackFun,
  removeAllWordStacksFun,
  removeAllWordDefinitionsFun,
  createWordStackInReviewFun,
  addWordStackInReviewFun,
  updateWordStackInReviewFun,
  getWordStackInReviewFun,
} from '../../db';
// import foundlingStack from '../../stacksData/foundlingStack';
import fraternalStack from '../../stacksData/fraternalStack';
// import stacks from '../../stacksData/stacks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  addWordStacks,
  setWordStackInReview,
} from '../../redux/reducers/appManageSlice';

export const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = React.useState<boolean>(false);

  const { isLoadingWordStacks, wordStacks } = useAppSelector(
    (state) => state.appManageSlice
  );

  const getWordStacksData = async () => {
    const wordStacksDataRes = await getWordStacksDataFun();
    let wordStackArr = [];
    for (let i = 0; i < wordStacksDataRes[0].rows.length; i++) {
      let wordStackObj = {
        id: wordStacksDataRes[0].rows.item(i).id,
        title_word: wordStacksDataRes[0].rows.item(i).title_word,
      };
      wordStackArr.push(wordStackObj);
    }
    dispatch(addWordStacks(wordStackArr));
  };

  React.useEffect(() => {
    getWordStacksData();
  }, []);

  const showModalHandler = (): void => {
    setShowModal(!showModal);
  };

  const backgroundColor = useAppSelector(
    (state) => state.appManageSlice.screenBackgroundColor
  );

  const newBtnHandler = async () => {
    let randomStackNum = -1;
    const stackArray = Array.from(Array(wordStacks.length).keys());

    while (!(stackArray as number[]).includes(randomStackNum)) {
      randomStackNum = Math.floor(Math.random() * 2);
    }
    console.log('wordStacks.length: ', wordStacks.length);
    console.log('randomStackNum: ', randomStackNum);

    const wordObj = {
      wordStack: randomStackNum as number,
      countDown: 20,
    };

    dispatch(setWordStackInReview(wordObj));
    await updateWordStackInReviewFun(randomStackNum as number, 20);

    navigation.navigate('StartLessonScreen');
  };

  const createDataHandler = async () => {
    try {
      const db = await connectionToDatabase();
      // ADD WORD STACK
      // await addWordStackDataFun(db, 'foundling');

      // for (let i = 1; i < stacks.length; i++) {
      //   console.log('Title of stack: ', stacks[i].title);
      //   await addWordStackDataFun(db, stacks[i].title);
      // }

      // const wordStackData = await getWordStacksDataFun(db);

      // let rowLength = wordStackData[0].rows.length;
      // for (let i = 0; i < rowLength; i++) {
      //   console.log(' ');
      //   console.log('id: ', wordStackData[0].rows.item(i).id);
      //   console.log('title_word: ', wordStackData[0].rows.item(i).title_word);
      // }

      // ADD WORD DEFINITIONS
      // const wordDefinitionData = {
      //   word: 'foundling',
      //   adjective: JSON.stringify([]),
      //   adverb: JSON.stringify([]),
      //   noun: JSON.stringify(['abandoned infant, discovered cared others.']),
      //   verb: JSON.stringify([]),
      //   modification: JSON.stringify([]),
      //   idiom: JSON.stringify([]),
      //   image: null,
      //   stack_id: 1,
      // };
      console.log('  ');
      // console.log('wordDefinitionData: ', wordDefinitionData);
      // await addWordDefinitionDataFun(db, wordDefinitionData);
      const currentStack = fraternalStack;
      for (let i = 0; i < currentStack.length; i++) {
        let wordDefinitionData = {
          word: currentStack[i].word,
          adjective: JSON.stringify(currentStack[i].adjective),
          adverb: JSON.stringify(currentStack[i].adverb),
          noun: JSON.stringify(currentStack[i].noun),
          verb: JSON.stringify(currentStack[i].verb),
          modification: JSON.stringify(currentStack[i].modification),
          idiom: JSON.stringify(currentStack[i].idiom),
          image: currentStack[i].image,
          stack_id: 2,
        };
        // console.log('wordDefinitionData: ', wordDefinitionData);
        // await addWordDefinitionDataFun(db, wordDefinitionData);
      }

      // Another variant
      // const values = [
      //   wordDefinitionData.word,
      //   wordDefinitionData.adjective,
      //   wordDefinitionData.adverb,
      //   wordDefinitionData.noun,
      //   wordDefinitionData.verb,
      //   wordDefinitionData.modification,
      //   wordDefinitionData.idiom,
      //   wordDefinitionData.image,
      //   wordDefinitionData.stack_id,
      // ];
      //   const addWordDefifinitionDataQuery = `
      //     INSERT INTO wordDefinitions (word, adjective, adverb, noun, verb, modification, idiom, image, stack_id)
      //     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      // `;

      // db.transaction((tx) => {
      //   tx.executeSql(
      //     addWordDefifinitionDataQuery,
      //     values,
      //     (txObj, resultSet) => {
      //       console.log('resultSet: ', resultSet);
      //     },
      //     (txObj, error) => {
      //       console.log('Error: ', error);
      //     }
      //   );
      // });

      // GET WORD DEFINITIONS DATA
      // const resWordDefData = await getWordDefDataCurrStackFun(db, 2);
      // console.log('resWordDefData: ', resWordDefData);

      // let rowLength = resWordDefData[0].rows.length;
      // for (let i = 0; i < rowLength; i++) {
      //   console.log(' ');
      //   // console.log('Row: ', i);
      //   console.log('id: ', resWordDefData[0].rows.item(i).id);
      //   console.log('word: ', resWordDefData[0].rows.item(i).word);
      //   console.log('noun: ', resWordDefData[0].rows.item(i).noun);
      //   console.log('verb: ', resWordDefData[0].rows.item(i).verb);
      //   console.log('stack_id: ', resWordDefData[0].rows.item(i).stack_id);
      //   console.log('image: ', resWordDefData[0].rows.item(i).image);
      // }

      // await removeAllWordStacksFun(db);
      // await removeAllWordDefinitionsFun(db);
      db.close();
    } catch (error) {
      console.error('Failed to insert data.');
    }
  };

  const createWordStackInReviewHandler = async () => {
    const db = await connectionToDatabase();
    try {
      // CREATE WORD STACK IN REVIEW
      // await createWordStackInReviewFun(db);

      // ADD DATA TO WORD STACK IN REVIEW
      // await addWordStackInReviewFun(db);

      // UPDATE DATA IN WORD STACK IN REVIEW
      // await updateWordStackInReviewFun(db, 1, 20);

      // GET WORD STACK IN REVIEW DATA
      // const wordStackInReviewData = await getWordStackInReviewFun(db);
      // console.log(
      //   'wordStackInReviewData: ',
      //   wordStackInReviewData[0].rows.item(0)
      // );

      db.close();
    } catch (error) {
      console.log('Error: ', error);
      throw new Error('Something went wrong!');
    }
  };

  return (
    <Container background={backgroundColor}>
      <HeaderBlock>
        <InstructionBtnBlock>
          <StyledButton
            isDisabled={false}
            type="instructions"
            onPress={showModalHandler}
          >
            Instructions
          </StyledButton>
        </InstructionBtnBlock>
        <SettingsDropdown />
      </HeaderBlock>

      <InstructionModal
        show={showModal}
        closeModalHandler={() => setShowModal(false)}
      />

      <ButtonsContainer>
        <ButtonBlock type="all">
          <StyledButton
            type="all"
            isDisabled={false}
            onPress={() => navigation.navigate('WordStacksScreen')}
            // onPress={createDataHandler}
          >
            All
          </StyledButton>
        </ButtonBlock>
        <ButtonBlock type="new">
          <StyledButton
            type="new"
            isDisabled={false}
            onPress={newBtnHandler}
            // onPress={createWordStackInReviewHandler}
          >
            New
          </StyledButton>
        </ButtonBlock>
        <ButtonBlock type="review">
          <StyledButton
            type="review"
            isDisabled={false}
            onPress={() => navigation.navigate('ReviewScreen')}
          >
            Review
          </StyledButton>
        </ButtonBlock>
      </ButtonsContainer>
    </Container>
  );
};
