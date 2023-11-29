import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  width: 40px;
  height: 40px;
`;

export const MenuContainer = styled.View`
  position: absolute;
  top: 45px;
  right: 0;
  width: 160px;
  height: 120px;
  padding: 10px 5px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const MenuElement = styled.Text`
  font-family: 'Lucida-Calligraphy-Italic';
  font-size: 18px;
  font-weight: 500;
  padding: 0 10px;
  width: 100%;
  color: #333;
`;
