import React from 'react';
import {
  Container,
  MenuContainer,
  MenuElement,
} from './SettingsDropdown.styled';
import StyledButton from '../StyledButton';
import { SettingsIcon } from '../icons';
import { TouchableOpacity } from 'react-native';
import { useAppDispatch } from '../../redux/hooks';
import { setScreenBackgroundColor } from '../../redux/reducers/appManageSlice';

const SettingsDropdown: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();

  const menuHandler = (): void => {
    setOpenMenu(!openMenu);
  };

  const selectBackgroundColorHandler = (color: string): void => {
    dispatch(setScreenBackgroundColor(color));
    setOpenMenu(false);
  };

  return (
    <Container>
      <StyledButton type="settings" onPress={menuHandler}>
        <SettingsIcon />
      </StyledButton>

      {openMenu ? (
        <MenuContainer>
          <TouchableOpacity
            onPress={() => selectBackgroundColorHandler('#fff')}
          >
            <MenuElement>White</MenuElement>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => selectBackgroundColorHandler('#FFF0DB')}
          >
            <MenuElement>Light beige</MenuElement>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => selectBackgroundColorHandler('#FFE2DB')}
          >
            <MenuElement>Light salmon</MenuElement>
          </TouchableOpacity>
        </MenuContainer>
      ) : null}
    </Container>
  );
};
export default SettingsDropdown;
