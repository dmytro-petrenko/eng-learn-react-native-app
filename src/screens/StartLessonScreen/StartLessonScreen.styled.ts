import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 250px;
  padding: 10px;
  margin-top: -10%;
`;

// export const ContentContainer = styled.View`
//   width: 100%;
//   height: 50%;
//   alignt-items: center;
//   justify-content: space-between;
// `;

export const TitleWord = styled.Text`
  font-family: 'Lucida-Calligraphy-Bold';
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  color: #333;
`;

export const BtnBlock = styled.View`
  width: 150px;
  height: 45px;
`;
