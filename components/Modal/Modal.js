import React from "react";
import { StyledBackground, StyledModal } from "./Modal.styled";
import { StyledButtonOrange } from "../PralineForm/PralineForm.styled";

export default function Modal({ onClose, title, children }) {
  return (
    <StyledBackground onClick={onClose}>
      <StyledModal>
        <h1> {title} </h1>
        <StyledButtonOrange type="button" onClick={onClose}>
          zurück
        </StyledButtonOrange>
        {children}
      </StyledModal>
    </StyledBackground>
  );
}
