import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IAppManageState, IWordStackInReview } from './appManageSlice.types';
import { TWordStacks, TWordDefifnition } from './appManageSlice.types';

const initialState: IAppManageState = {
  screenBackgroundColor: '#FFF0DB',
  isLoadingWordStacks: 'idle',
  wordStacks: [],
  isLoadingWordDef: 'idle',
  wordStackInReview: {
    wordStack: null,
    countDown: 0,
  },
  wordDefinitions: [],
  startTime: null,
};

// export const fetchWordStacks = createAsyncThunk(
//   'appManage/fetchWordStacks',
//   async () => {
//     const db = await connectionToDatabase();
//     const response = await db.executeSql(getWordStacksDataQuery);
//     // console.log('response: ', response[0].rows.length);
//     let responseArr = [];
//     for (let i = 0; i < response[0].rows.length; i++) {
//       // console.log(' ');
//       // console.log('id: ', response[0].rows.item(i).id);
//       // console.log('title_word: ', response[0].rows.item(i).title_word);
//       let itemObj = {
//         id: response[0].rows.item(i).id,
//         title_word: response[0].rows.item(i).title_word,
//       };
//       responseArr.push(itemObj);
//     }
//     db.close();
//     // console.log('responseArr: ', responseArr);
//     return responseArr;
//   }
// );

// type TWordObj = {
//   wordStackNum: number;
//   countDown: number;
// };

// export const fetchWordDefinitionsCurrStack = createAsyncThunk(
//   'appManage/fetchWordDefinitions',
//   async (stackId: number) => {
//     const db = await connectionToDatabase();
//     // const stackId = wordObj.wordStackNum + 1;
//     console.log('stackId: ', stackId);
//     const response = await db.executeSql(getWordDefDataCurrStackQuery, [
//       stackId,
//     ]);
//     let responseArr = [];
//     for (let i = 0; i < response[0].rows.length; i++) {
//       let wordDefObj = {
//         id: response[0].rows.item(0).id,
//         word: response[0].rows.item(i).word,
//         adjective: JSON.parse(response[0].rows.item(i).adjective),
//         adverb: JSON.parse(response[0].rows.item(i).adverb),
//         noun: JSON.parse(response[0].rows.item(i).noun),
//         verb: JSON.parse(response[0].rows.item(i).verb),
//         modification: JSON.parse(response[0].rows.item(i).modification),
//         idiom: JSON.parse(response[0].rows.item(i).idiom),
//         image: response[0].rows.item(i).image,
//         stack_id: response[0].rows.item(i).stack_id,
//       };
//       responseArr.push(wordDefObj);
//     }
//     console.log('response: ', response[0].rows);
//     // console.log('responseArr: ', responseArr);
//     return responseArr;
//   }
// );

export const appManageSlice = createSlice({
  name: 'appManage',
  initialState,
  extraReducers: (builder) => {
    builder;
    // .addCase(fetchWordStacks.pending, (state: IAppManageState) => {
    //   state.isLoadingWordStacks = 'loading';
    // })
    // .addCase(
    //   fetchWordStacks.fulfilled,
    //   (state: IAppManageState, action: PayloadAction<TWordStacks[]>) => {
    //     state.isLoadingWordStacks = 'succeeded';
    //     state.wordStacks = action.payload;
    //   }
    // )
    // .addCase(fetchWordStacks.rejected, (state: IAppManageState) => {
    //   state.isLoadingWordStacks = 'failed';
    // })
    // .addCase(
    //   fetchWordDefinitionsCurrStack.pending,
    //   (state: IAppManageState) => {
    //     console.log('Loading...');
    //     state.isLoadingWordDef = 'loading';
    //   }
    // )
    // .addCase(
    //   fetchWordDefinitionsCurrStack.fulfilled,
    //   (state: IAppManageState, action: PayloadAction<TWordDefifnition[]>) => {
    //     console.log('Fulfiled!');
    //     state.isLoadingWordDef = 'succeeded';
    //     state.wordDefinitions = action.payload;
    //   }
    // )
    // .addCase(
    //   fetchWordDefinitionsCurrStack.rejected,
    //   (state: IAppManageState) => {
    //     console.log('Rejected!');
    //     state.isLoadingWordDef = 'failed';
    //   }
    // );
  },
  reducers: {
    setScreenBackgroundColor: (
      state: IAppManageState,
      action: PayloadAction<string>
    ) => {
      state.screenBackgroundColor = action.payload;
    },
    addWordStacks: (
      state: IAppManageState,
      action: PayloadAction<TWordStacks[]>
    ) => {
      state.wordStacks = action.payload;
    },
    setWordStackInReview: (
      state: IAppManageState,
      action: PayloadAction<IWordStackInReview>
    ) => {
      state.wordStackInReview = action.payload;
    },
    setStartTime: (
      state: IAppManageState,
      action: PayloadAction<number | null>
    ) => {
      state.startTime = action.payload;
    },
    addWordDefinitions: (
      state: IAppManageState,
      action: PayloadAction<TWordDefifnition[]>
    ) => {
      state.wordDefinitions = action.payload;
    },
  },
});

export const {
  setScreenBackgroundColor,
  addWordStacks,
  setWordStackInReview,
  setStartTime,
  addWordDefinitions,
} = appManageSlice.actions;

export default appManageSlice.reducer;
