import styled from 'styled-components/native';

export const ModalWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 0;
`;
//   flex: 1;
//   justify-content: center;
//   align-items: center;height: 170px;
export const ModalContainer = styled.View`
  width: 80%;
  padding: 10px 30px;
  border: 1px solid #333;
  border-radius: 15px;
  background-color: #fff;
  margin: 0 auto;
`;

export const CloseBtnBlock = styled.View`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
`;
//   background-color: #ccc;
// align-items: flex-end;
//   justify-content: flex-start;
export const Title = styled.Text`
  font-family: 'Lucida-Calligraphy-Bold';
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin: 15px auto;
  color: #333;
`;
export const ModalText = styled.Text`
  font-family: 'Times New Roman';
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 10px 0;
`;
