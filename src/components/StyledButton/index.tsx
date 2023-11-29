import React from 'react';
// import { Text } from 'react-native';
import { Button, Text } from './StyledButton.styled';
import { TStyledButtonProps } from './StyledButton.types';

const StyledButton: React.FC<TStyledButtonProps> = ({
  children,
  type,
  isDisabled,
  onPress,
}): JSX.Element => {
  return (
    <Button
      activeOpacity={isDisabled ? 1 : 0.2}
      type={type}
      disabled={isDisabled}
      onPress={onPress}
    >
      <Text type={type}>{children}</Text>
    </Button>
  );
};
export default StyledButton;
