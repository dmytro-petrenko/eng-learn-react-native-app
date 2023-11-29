export interface IStack {
  title: string;
  list: TListElement[];
}

export type TListElement = {
  word: string;
  adjective: string[] | [];
  adverb: string[] | [];
  noun: string[] | [];
  verb: string[] | [];
  modification: string[] | [];
  idiom: string[] | [];
  image: string | null;
};
