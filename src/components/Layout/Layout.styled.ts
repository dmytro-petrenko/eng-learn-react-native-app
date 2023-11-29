import styled from 'styled-components/native';

export const Container = styled.View<{ color?: string }>`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: ${({ color }) => color};
`;
