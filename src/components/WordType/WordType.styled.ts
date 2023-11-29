import styled from 'styled-components/native';

export const Container = styled.View`
  flex-grow: 0;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  flex-wrap: nowrap;
  padding-bottom: 15px;
`;

export const Title = styled.Text<{ color: string }>`
  font-family: 'TimesNewRomanMTStd-Bold';
  font-size: 18px;
  font-weight: 600;
  color: ${({ color }) => color};
`;

export const DefList = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-basis: 80%;
`;

export const DefListElement = styled.View`
  position: relative;
`;
// flexgrow: 0; justify-content: baseline; height: 26px;
// flexshrink: 0;
// flex-wrap: wrap; flex-direction: row;
//   align-items: flex-end;

export const Definition = styled.Text`
  font-family: 'TimesNewRomanMTStd-Cond';
  font-size: 18px;
  font-weight: 400;
  color: #333;
`;
// line-height: 26px;  height: 26px;

export const BoldText = styled.Text`
  font-family: 'TimesNewRomanMTStd-Bold';
  font-size: 18px;
  font-weight: 400;
  color: #333;
`;
export const BoldItalicText = styled.Text`
  font-family: 'TimesNewRomanMTStd-BoldIt';
  font-size: 18px;
  font-weight: 400;
  color: #333;
`;
// font-style: italic;
export const BlockTitle = styled.View`
  height: 24px;
  padding-top: 2px;
`;

export const Block = styled.View`
  height: 22px;
  padding-top: 1px;
`;

export const PartText = styled.Text`
  font-family: 'TimesNewRomanMTStd-Cond';
  font-size: 18px;
  font-weight: 400;
  color: #333;
`;
//   margin-bottom: 2px;
