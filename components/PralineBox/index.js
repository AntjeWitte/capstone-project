import { useRouter } from "next/router";
import React, { useState } from "react";

import InputField from "../PralineForm/InputField";
import {
  Print,
  StyledBox,
  StyledDiv,
  StyledDivBold,
  StyledH2,
  StyledImage,
  StyledWrapper,
} from "./box.styled";
import Modal from "../Modal/Modal";
import PralineList from "../PralineList/PralineList";
import {
  GridContainer,
  StyledButton,
  StyledButtonBig,
  StyledButtonOrange,
} from "../PralineForm/PralineForm.styled";
import MessageModal from "../Modal/MessageModal";

export default function MainPage() {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMessageModelVisible, setIsMessageModelVisible] = useState(false);
  const [slotId, setSlotId] = useState(null);
  const [boxsize, setBoxsize] = useState(9);
  const [pralineList, setPralineList] = useState([]);
  const [pralineBoxName, setPralineBoxName] = useState("");

  function cancel() {
    setPralineList([]);
    setPralineBoxName("");
    setSlotId(null);
  }

  const ingredientSum = pralineList
    .map((praline) => praline.ingredients)
    .flat()
    .reduce(
      (sum, current) => ({
        ...sum,
        [current.ingredient]:
          (sum[current.ingredient] || 0) + parseInt(current.amount, 10),
      }),
      {}
    );

  const ingredientList = Object.entries(ingredientSum)
    .map(([name, amount]) => ({
      name,
      amount,
    }))
    .sort((a, b) => b.amount - a.amount);

  const allergySum = pralineList
    .map((praline) => praline.allergyTraces)
    .flat()
    .reduce(
      (sum, current) => ({
        ...sum,
        [current.ingredient]:
          (sum[current.ingredient] || 0) + parseInt(current.amount, 10),
      }),
      {}
    );

  const allergyList = Object.entries(allergySum)
    .map(([name, amount]) => ({
      name,
      amount,
    }))
    .sort((a, b) => b.amount - a.amount);

  function handleAddPraline(newpraline) {
    const newArray = pralineList;
    newArray[slotId] = newpraline;
    setPralineList(newArray);
  }

  const weightSum = pralineList.reduce(
    (sum, current) => sum + parseFloat(current.weight, 10),
    0
  );

  console.log("slotId", slotId);

  const getBoxes = () => {
    const boxes = [];

    for (let i = 0; i < boxsize; i += 1) {
      const key = i;
      boxes.push(
        <StyledBox
          key={key}
          onClick={() => {
            setIsModalVisible(true);
            setSlotId(key);
          }}
        >
          {/* {pralineList[i]?.name} */}
          {pralineList[i]?.imageId && (
            <StyledImage
              width="100"
              height="100"
              src={`https://res.cloudinary.com/dtz3vpjks/image/upload/v1691655286/${pralineList[i].imageId}.png`}
              sizes="50vw"
              alt={pralineList[i]?.name}
            />
          )}
        </StyledBox>
      );
    }
    return boxes;
  };

  return (
    <>
      <InputField
        type="number"
        id="boxsize"
        data-testid="boxsize"
        label="Gewünschte Pralinenanzahl"
        value={boxsize}
        onChange={(event) => {
          const { value } = event.target;

          const fixedValue = Math.max(1, Math.min(24, value));

          setBoxsize(value > 0 ? fixedValue : " ");
        }}
      />
      <br />
      <InputField
        type="text"
        id="boxname"
        label="Produktname"
        value={pralineBoxName}
        onChange={(event) => {
          setPralineBoxName(event.target.value);
        }}
      />
      <Print>
        <StyledH2>{pralineBoxName}</StyledH2>
        <StyledWrapper>{getBoxes()}</StyledWrapper>

        {isModalVisible && (
          <Modal
            onClose={() => setIsModalVisible(false)}
            title="Pralinenauswahl"
          >
            <PralineList
              onSelectPraline={(praline) => {
                handleAddPraline(praline);
              }}
            >
              auswählen
            </PralineList>
          </Modal>
        )}
        <StyledDivBold>Gewicht: {weightSum} g</StyledDivBold>
        <StyledDivBold>
          Zutaten:{" "}
          <StyledDiv>
            {ingredientList.map((ingredient) => ingredient.name).join(", ")}
          </StyledDiv>
        </StyledDivBold>
        <StyledDivBold>
          Allergenspuren:{" "}
          <StyledDiv>
            {allergyList.map((ingredient) => ingredient.name).join(", ")}
          </StyledDiv>
        </StyledDivBold>
      </Print>
      <br />
      {isMessageModelVisible && (
        <MessageModal
          onClose={() => setIsMessageModelVisible(false)}
          onSubmit={() => {
            router.push("/pralinen/edit");
          }}
          text="Achtung: beim Verlassen der Seite wird die Pralinenschachtel zurückgesetzt!"
          button1="zurück"
          button2="fortfahren"
        />
      )}
      <GridContainer>
        <StyledButton type="button" onClick={cancel}>
          Pralinenschachtel zurücksetzen
        </StyledButton>
        <StyledButtonOrange type="button" onClick={() => window.print()}>
          Speichern / Drucken
        </StyledButtonOrange>
        <br />
        <StyledButtonBig
          type="button"
          onClick={() => {
            if (slotId != null) {
              setIsMessageModelVisible(true);
            } else {
              router.push("/pralinen/edit");
            }
          }}
        >
          Pralinen anpassen
        </StyledButtonBig>
      </GridContainer>
    </>
  );
}
