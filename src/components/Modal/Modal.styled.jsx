import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalStyled = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 12px;
  right: 48px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.4;
  background: gray;
  transition: all 0.3;
  &:hover,
  :focus {
    opacity: 1;
  }
`;