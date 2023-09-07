import React from "react";
import { StyledBackground, StyledModal } from "./Modal.styled";
import { StyledButton } from "../PralineForm/PralineForm.styled";

export default function Modal({ onClose, title, children }) {
  return (
    <StyledBackground onClick={onClose}>
      <StyledModal>
        <h1> {title} </h1>
        <StyledButton type="button" onClick={onClose}>
          x
        </StyledButton>
        {children}
      </StyledModal>
    </StyledBackground>
  );
}
