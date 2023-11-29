import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';

enablePromise(true);

export const connectionToDatabase = async () => {
  return openDatabase(
    { name: 'EnglishLearningDb', location: 'default' },
    () => {},
    (error) => {
      console.error(error);
      throw new Error('Could not connect to database');
    }
  );
};

// WORD STACK FUNCTIONS
export const createWordStackFun = async (db: SQLiteDatabase) => {
  const createWordStacksQuery = `
      CREATE TABLE IF NOT EXISTS wordStacks (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title_word TEXT NOT NULL
      )
  `;

  try {
    await db.executeSql(createWordStacksQuery);
  } catch (error) {
    console.log(error);
    throw new Error('Failed to create word stack');
  }
};

export const removeAllWordStacksFun = async (db: SQLiteDatabase) => {
  const removeAllWordStacksQuery = `
    DROP TABLE wordStacks
  `;

  try {
    await db.executeSql(removeAllWordStacksQuery);
    console.log('Removed all stacks!');
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete the table wordStacks');
  }
};

export const addWordStackDataFun = async (
  db: SQLiteDatabase,
  wordStackName: string
) => {
  const addWordStackDataQuery = `
    INSERT INTO wordStacks (title_word) VALUES (?)    
  `;

  try {
    await db.executeSql(addWordStackDataQuery, [wordStackName]);
  } catch (error) {
    console.log(error);
    throw new Error('Failed to add new data to word stack');
  }
};

export const getWordStacksDataFun = async () => {
  const db = await connectionToDatabase();

  const getWordStacksDataQuery = `
    SELECT * FROM wordStacks
  `;

  try {
    const wordStackData = await db.executeSql(getWordStacksDataQuery);
    db.close();
    return wordStackData;
  } catch (error) {
    throw new Error('Failed to get word stacks data');
  }
};

// WORD DEFINITIONS FUNCTION
export const createWordDefinitionsFun = async () => {
  const db = await connectionToDatabase();

  const createWordDefinitionsQuery = `
    CREATE TABLE IF NOT EXISTS wordDefinitions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      word TEXT NOT NULL,
      adjective TEXT NOT NULL,
      adverb TEXT NOT NULL,
      noun TEXT NOT NULL,
      verb TEXT NOT NULL,
      modification TEXT NOT NULL,
      idiom TEXT NOT NULL,
      image TEXT,
      stack_id INTEGER NOT NULL,
      FOREIGN KEY (stack_id) REFERENCES wordStacks (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
    )
  `;

  try {
    await db.executeSql(createWordDefinitionsQuery);
    await db.close();
  } catch (error) {
    console.log(error);
    throw new Error('Failed to create word definitions');
  }
};

export const removeAllWordDefinitionsFun = async () => {
  const db = await connectionToDatabase();

  const removeAllWordDefinitionsQuery = `
    DROP TABLE wordDefinitions
  `;

  try {
    await db.executeSql(removeAllWordDefinitionsQuery);
    db.close();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete the table wordDefinitions ');
  }
};

export type TWordDefinitionsData = {
  word: string;
  adjective: string;
  adverb: string;
  noun: string;
  verb: string;
  modification: string;
  idiom: string;
  image: string | null;
  stack_id: number;
};

export const addWordDefinitionDataFun = async (
  wordDefData: TWordDefinitionsData
) => {
  const db = await connectionToDatabase();

  const addWordDefifinitionDataQuery = `
    INSERT INTO wordDefinitions (word, adjective, adverb, noun, verb, modification, idiom, image, stack_id) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    wordDefData.word,
    wordDefData.adjective,
    wordDefData.adverb,
    wordDefData.noun,
    wordDefData.verb,
    wordDefData.modification,
    wordDefData.idiom,
    wordDefData.image,
    wordDefData.stack_id,
  ];

  try {
    const response = await db.executeSql(addWordDefifinitionDataQuery, values);
    db.close();
    return response;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to add new data to word definition');
  }
};

export const getWordDefDataCurrStackFun = async (stackId: number) => {
  const db = await connectionToDatabase();

  const getWordDefDataCurrStackQuery = `
    SELECT * FROM wordDefinitions WHERE stack_id=?
`;

  try {
    const wordDefData = await db.executeSql(getWordDefDataCurrStackQuery, [
      stackId,
    ]);
    db.close();
    return wordDefData;
  } catch (error) {
    throw new Error('Failed to get word definitions data for current stack');
  }
};

// WORD STACK IN REVIEW
export const createWordStackInReviewFun = async () => {
  const db = await connectionToDatabase();

  const createWordStackInReviewQuery = `
    CREATE TABLE IF NOT EXISTS wordStackInReview (id INTEGER PRIMARY KEY, wordStack INTEGER, countdown INTEGER)
  `;

  try {
    await db.executeSql(createWordStackInReviewQuery);
    await db.close();
  } catch (error) {
    throw new Error('Failed to create wordStackInReview.');
  }
};

export const addWordStackInReviewFun = async () => {
  const db = await connectionToDatabase();

  const addWordStackInReviewQuery = `
    INSERT INTO wordStackInReview (wordStack, countdown) VALUES (?, ?)
  `;

  try {
    const response = await db.executeSql(addWordStackInReviewQuery, [null, 0]);
    await db.close();
    return response;
  } catch (error) {
    throw new Error('Failed to add wordStackInReview data');
  }
};

export const updateWordStackInReviewFun = async (
  wordStackNum: number,
  countdown: number
) => {
  const db = await connectionToDatabase();

  const updateWordStackInReviewQuery = `
    UPDATE wordStackInReview SET wordStack = ?, countDown = ? WHERE id = 1
  `;

  try {
    const response = await db.executeSql(updateWordStackInReviewQuery, [
      wordStackNum,
      countdown,
    ]);
    await db.close();
    return response;
  } catch (error) {
    throw new Error('Failed to update wordStackInReview.');
  }
};

export const getWordStackInReviewFun = async () => {
  const db = await connectionToDatabase();

  const geteWordStackInReviewQuery = `
    SELECT * FROM wordStackInReview WHERE id = 1
  `;

  try {
    const response = await db.executeSql(geteWordStackInReviewQuery);
    await db.close();
    return response;
  } catch (error) {
    throw new Error('Failed to load wordStackInReview data.');
  }
};

// START TIME FOR TIMER
export const createStartTimeFun = async () => {
  const db = await connectionToDatabase();

  const createStartTimeQuery = `
    CREATE TABLE IF NOT EXISTS startTimeForTimer (id INTEGER PRIMARY KEY, startTimeVal INTEGER)
  `;

  try {
    await db.executeSql(createStartTimeQuery);
    await db.close();
    console.log('StartTime Table created.');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to create startTime.');
  }
};

export const addStartTimeDataFun = async (startTime: number | null) => {
  const db = await connectionToDatabase();

  const addStartTimeDataQuery = `
    INSERT INTO startTimeForTimer (startTimeVal) VALUES (?)
  `;

  try {
    await db.executeSql(addStartTimeDataQuery, [startTime]);
    await db.close();
    console.log('Added startTime values.');
  } catch (error) {
    console.log('Error: ', error);
    throw new Error('Failed to add startTime data.');
  }
};

export const getStartTimeDataFun = async () => {
  const db = await connectionToDatabase();
//  WHERE id = 1
  const getStartTimeDataQuery = `
    SELECT * FROM startTimeForTimer
  `;

  try {
    const response = await db.executeSql(getStartTimeDataQuery);
    await db.close();
    return response;
  } catch (error) {
    console.log('Error: ', error);
    throw new Error('Failed to load startTimeForTimer data.');
  }
};

export const updateStartTimeDataFun = async (startTimeVal: number | null) => {
  const db = await connectionToDatabase();

  const updateStartTimeDataQuery = `
    UPDATE startTimeForTimer SET startTimeVal = ? WHERE id = 1
  `;

  try {
    const response = await db.executeSql(updateStartTimeDataQuery, [
      startTimeVal,
    ]);
    await db.close();
    console.log('Response: ', response[0].rows.length);
    return response;
  } catch (error) {
    console.log('Error: ', error);
    throw new Error('Failed to update startTime data');
  }
};

export const removeTableStartTimeFun = async () => {
  const db = await connectionToDatabase();

  const removeStartTimeQuery = `
    DROP TABLE startTimeForTimer
  `;

  try {
    await db.executeSql(removeStartTimeQuery);
  } catch (error) {
    console.log('Error: ', error);
    throw new Error('Failed to delete startTime table');
  }
};

export const removeStartTimeObjFun = async () => {
  const db = await connectionToDatabase();

  const removeStartTimeObjQuery = `
    DELETE FROM startTimeForTimer WHERE id = 1
  `;

  try {
    await db.executeSql(removeStartTimeObjQuery);
    await db.close();
  } catch (error) {
    console.log('Error: ', error);
    throw new Error('Failed to remove startTime row.');
  }
};
