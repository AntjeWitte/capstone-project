import React from "react";
import { StyledBackground, StyledModal } from "./Modal.styled";

export default function Modal({ onClose, title, children }) {
  return (
    <StyledBackground onClick={onClose}>
      <StyledModal>
        <h1> {title} </h1>
        <button type="button" onClick={onClose}>
          x
        </button>
        {children}
      </StyledModal>
    </StyledBackground>
  );
}
