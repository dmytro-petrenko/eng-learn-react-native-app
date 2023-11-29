import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 10px 10px 60px;
`;

export const Title = styled.Text`
  font-family: 'Lucida-Calligraphy-Bold';
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 20px;
  text-transform: uppercase;
  text-align: center;
  color: #333;
`;

export const WordList = styled.View`
  align-items: center;
  justify-content: flex-start;
  gap: 7px;
  position: relative;
  max-width: 150px;
  margin: 0 auto;
`;

export const WordBlock = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const Word = styled.Text`
  font-family: 'Times-New-Roman';
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 7px;
  color: #333;
`;

export const Dot = styled.View`
  width: 5px;
  height: 5px;
  background-color: #333;
  border-radius: 2.5px;
`;
