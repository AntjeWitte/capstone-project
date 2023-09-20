import React from "react";
import { StyledButtonOrange } from "../PralineForm/PralineForm.styled";
import {
  StyledMessageBackground,
  StyledMessageModal,
} from "./MessageModel.styled";

export default function MessageModal({
  onClose,
  onSubmit,
  text,
  button1,
  button2,
}) {
  return (
    <StyledMessageBackground>
      <StyledMessageModal>
        <p> {text} </p>
        <StyledButtonOrange type="button" onClick={onClose}>
          {button1}
        </StyledButtonOrange>
        {button2 && (
          <StyledButtonOrange
            type="button"
            onClick={(event) => {
              onSubmit(event);
              onClose(event);
            }}
          >
            {button2}
          </StyledButtonOrange>
        )}
      </StyledMessageModal>
    </StyledMessageBackground>
  );
}
