import React from 'react';
import {
  Container,
  Title,
  DefList,
  DefListElement,
  Definition,
  BoldText,
  BoldItalicText,
  BlockTitle,
  Block,
  PartText,
} from './WordType.styled';
import { TWordType } from './WordType.types';
import { Text, View } from 'react-native';
import Highlighter from '../Highlighter';

const WordType = ({ type, color, definitionArr }: TWordType) => {
  function combineChunkElements(elem: string, row: number) {
    switch (elem) {
      case ' ':
        return (
          <Block>
            <PartText> </PartText>
          </Block>
        );
      case ', ':
        return (
          <Block>
            <PartText>{', '}</PartText>
          </Block>
        );
      case ' (':
        return (
          <Block>
            <PartText>{' ('}</PartText>
          </Block>
        );
      case ')':
        return (
          <Block>
            <PartText>{')'}</PartText>
          </Block>
        );
      case ') ':
        return (
          <Block>
            <PartText>{') '}</PartText>
          </Block>
        );
      case '.':
        return (
          <Block>
            <PartText>{'.'}</PartText>
          </Block>
        );
      case ';':
        return (
          <Block>
            <PartText>{';'}</PartText>
          </Block>
        );
      case '/':
        return (
          <Block>
            <PartText>{'/'}</PartText>
          </Block>
        );
      default:
        return <Highlighter word={elem} />;
    }
  }

  const splitPattern =
    /(\w+'\w+)|(\w+-\w+)|(\s\()|(\()|(\)\s)|(\))|\/|\w+|(\,\s)|\s+|\;|\./gi;

  return (
    <Container>
      <BlockTitle>
        <Title color={color}>{type}: </Title>
      </BlockTitle>
      <DefList>
        {definitionArr.map((item, index) => {
          let row = index + 1;
          if (item.includes(':')) {
            let defWord = item.split(':');
            return (
              <DefListElement key={index}>
                <Definition>
                  {definitionArr.length > 1 ? (
                    <Block>
                      <BoldText>{index + 1} </BoldText>
                    </Block>
                  ) : null}
                  <Block>
                    <BoldItalicText>{defWord[0]}: </BoldItalicText>
                  </Block>
                  {(defWord[1].match(splitPattern) || ['']).map(
                    (elem, index) => (
                      <React.Fragment key={index}>
                        {combineChunkElements(elem, row)}
                      </React.Fragment>
                    )
                  )}
                </Definition>
              </DefListElement>
            );
          }
          return (
            <DefListElement key={index}>
              {definitionArr.length > 1 ? (
                <Definition>
                  <Block>
                    <BoldText>{index + 1} </BoldText>
                  </Block>
                  {(item.match(splitPattern) || ['']).map((elem, index) => (
                    <React.Fragment key={index}>
                      {combineChunkElements(elem, row)}
                    </React.Fragment>
                  ))}
                </Definition>
              ) : (
                <Definition>
                  {(item.match(splitPattern) || ['']).map((elem, index) => (
                    <React.Fragment key={index}>
                      {combineChunkElements(elem, row)}
                    </React.Fragment>
                  ))}
                </Definition>
              )}
            </DefListElement>
          );
        })}
      </DefList>
    </Container>
  );
};
export default WordType;
