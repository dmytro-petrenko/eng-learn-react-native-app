import styled from 'styled-components/native';

export const Container = styled.View<{ background: string }>`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: ${({ background }) => background};
`;

export const Title = styled.Text`
  font-family: 'Times-New-Roman';
  font-size: 26px;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin: 20px auto;
`;

export const ListElement = styled.TouchableOpacity`
  position: relative;
  z-index: 100;
  backgraund-color: transparent;
  margin-bottom: 20px;
`;

export const TitleWord = styled.Text<{ isActive: boolean }>`
  font-family: 'Lucida-Calligraphy-Bold';
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  text-transform: capitalize;
  color: ${({ isActive }) =>
    isActive ? 'rgb(0, 0, 250)' : 'rgb(100, 100, 100)'};
`;

// export const CaseContainer = styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   padding: 10px;
// `;

// export const LoadingText = styled.Text`
//   font-family: 'Lucida-Calligraphy-Black';
//   font-size: 24px;
//   font-weight: 500;
//   color: #009933;
// `;

// export const ErrorText = styled.Text`
//   font-family: 'Times-New-Roman';
//   font-size: 24px;
//   font-weight: 500;
//   color: #ff3300;
// `;
