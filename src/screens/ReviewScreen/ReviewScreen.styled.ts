import styled from 'styled-components/native';

export const Container = styled.View<{ background: string }>`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: ${({ background }) => background};
`;

export const Title = styled.Text`
  font-family: Times New Roman;
  font-size: 24px;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin: 20px auto;
`;