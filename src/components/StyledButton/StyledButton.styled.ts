import styled from 'styled-components/native';

export const PageContainer = styled.View`
  display: block;
  width: 100%;
  height: 100%;
  background-color: #fff0db;
`;

export const Button = styled.TouchableOpacity<{
  type: string;
  disabled: boolean;
}>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0;

  ${({ type, disabled }) => {
    switch (type) {
      case 'all':
        return `
        width: 150px;
        height: 45px;
        background-color: #3333ff;
        border-radius: 8px;
        `;
      case 'new':
        return `
        width: 150px;
        height: 45px;
        background-color: ${disabled ? '#ccc' : '#009933'} ;
        border-radius: 8px;
        `;
      case 'review':
        return `
          width: 150px;
          height: 45px;
          background-color: #ff3300;
          border-radius: 8px;
          `;
      case 'instructions':
        return `
          width: 140px;
          height: 40px;
          background-color: #bebebe;
          border-radius: 8px;
      `;
      case 'close-btn':
        return `
          background-color: transparent;
          width: 30px;
          height: 30px;
          border: none;
          border-radius: 5px;
          padding: 0;
        `;
      case 'settings':
        return `
          width: 40px;
          height: 40px;
          border: 1px solid #333;
          border-radius: 10px;
          background-color: transparent;
          `;
      case 'start':
        return `
            width: 150px;
            height: 45px;
            border-radius: 8px;
            border: 0;
            background-color: rgba(0, 153, 51, 1);
            
            
            padding-top: 6px;
            padding-bottom: 4px;
            `;
    }
  }}
`;

export const Text = styled.Text<{ type: string }>`
  width: 100%;
  text-align: center;

  ${({ type }) => {
    switch (type) {
      case 'all':
      case 'new':
      case 'review':
        return `
            font-family: 'Lucida-Calligraphy-Bold';
            font-size: 18px;
            font-weight: 400;
            text-transform: uppercase;
            color: #fff;
            `;
      case 'instructions':
        return `
          font-family: 'Lucida-Calligraphy-Bold';
          font-size: 16px;
          font-weight: 500;
          text-transform: capitalize;
          color: #333;
      `;
      case 'start':
        return `
          font-family: 'Lucida-Calligraphy-Bold';
          font-size: 18px;
          font-weight: 500;
          color: #fff;
        `;
    }
  }}
`;
