import React from 'react';
import { Modal } from 'react-native';
import {
  ModalWrapper,
  ModalContainer,
  CloseBtnBlock,
  Title,
  ModalText,
} from './InstructionModal.styled';
import { TInstructionModalProps } from './InstructionModal.types';
import StyledButton from '../../StyledButton';
import { CloseIcon } from '../../icons';

const InstructionModal: React.FC<TInstructionModalProps> = ({
  show,
  closeModalHandler,
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={show}>
      <ModalWrapper>
        <ModalContainer>
          <CloseBtnBlock>
            <StyledButton type="close-btn" onPress={closeModalHandler}>
              <CloseIcon />
            </StyledButton>
          </CloseBtnBlock>
          <Title>Instructions</Title>
          <ModalText>20 minutes to memorize entries</ModalText>
          <ModalText>5 minutes to review</ModalText>
        </ModalContainer>
      </ModalWrapper>
    </Modal>
  );
};
export default InstructionModal;
