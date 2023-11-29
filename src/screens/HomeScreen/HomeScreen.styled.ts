import styled from 'styled-components/native';

export const Container = styled.View<{ background: string }>`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  background-color: ${({ background }) => background};
`;
// #fff0db
export const HeaderBlock = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  height: 40px;
  padding: 0 15px;
  margin-bottom: 15px;
`;
export const InstructionBtnBlock = styled.View`
  width: 140px;
  height: 40px;
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ButtonBlock = styled.View<{ type: string }>`
  width: 160px;
  height: 55px;
  margin: 0 auto 15px;
  padding: 5px;
  border-radius: 10px;
  ${({ type }) => {
    switch (type) {
      case 'all':
        return `
        border: 1px dashed #3333ff;
        `;
      case 'new':
        return `
        border: 1px dashed #009933;
        `;
      case 'review':
        return `
          border: 1px dashed #ff3300;
          `;
    }
  }}
`;
