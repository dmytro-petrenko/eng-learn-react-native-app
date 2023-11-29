export interface IAppManageState {
  screenBackgroundColor: string;
  isLoadingWordStacks: 'idle' | 'loading' | 'succeeded' | 'failed';
  wordStacks: TWordStacks[];
  isLoadingWordDef: 'idle' | 'loading' | 'succeeded' | 'failed';
  wordDefinitions: TWordDefifnition[];
  wordStackInReview: IWordStackInReview;
  startTime: number | null;
}

export type TWordStacks = {
  id: number;
  title_word: string;
};

export interface IWordStackInReview {
  wordStack: number | null;
  countDown: number;
}

export type TWordDefifnition = {
  id: number;
  word: string;
  adjective: string[];
  adverb: string[];
  noun: string[];
  verb: string[];
  modification: string[];
  idiom: string[];
  image: string | null;
  stack_id: number;
};
