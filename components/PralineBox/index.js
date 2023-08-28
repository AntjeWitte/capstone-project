import { useRouter } from "next/router";
import React, { useState } from "react";
import InputField from "../PralineForm/InputField";
import { StyledBox, StyledWrapper } from "./box.styled";
import Modal from "../Modal/Modal";
import PralineList from "../PralineList/PralineList";

export default function MainPage() {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  // eslint-disable-next-line operator-linebreak
  const [pralineSelectedForEditing, setPralineSelectedForEditing] =
    useState(null);
  console.log(pralineSelectedForEditing);
  return (
    <>
      <InputField
        type="number"
        min="4"
        max="16"
        id="boxsize"
        label="Gewünschte Pralinenanzahl"
      />
      <br />
      <InputField type="text" id="boxname" label="Produktname" />
      <StyledWrapper>
        <StyledBox onClick={() => setIsModalVisible(true)}>
          {/* {pralineSelectedForEditing ? pralineSelectedForEditing.name : null}{" "} */}
        </StyledBox>
        <StyledBox onClick={() => setIsModalVisible(true)} />
        <StyledBox onClick={() => setIsModalVisible(true)} />
        <StyledBox onClick={() => setIsModalVisible(true)} />
        <StyledBox onClick={() => setIsModalVisible(true)} />
        <StyledBox onClick={() => setIsModalVisible(true)} />
      </StyledWrapper>

      {isModalVisible && (
        <Modal onClose={() => setIsModalVisible(false)} title="Pralinenauswahl">
          <PralineList
            buttonName="auswählen"
            onSelectPraline={(praline) => {
              setPralineSelectedForEditing(praline);
            }}
          />
        </Modal>
      )}
      <button type="button" onClick="{cancel}">
        Zurücksetzen
      </button>
      <button type="button">Speichern / Drucken</button>
      <button
        type="button"
        onClick={() => {
          router.push("/pralinen/edit");
        }}
      >
        Pralinen anpassen
      </button>
    </>
  );
}
