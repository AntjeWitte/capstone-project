import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";
import InputField from "../PralineForm/InputField";
import { StyledBox, StyledWrapper } from "./box.styled";
import Modal from "../Modal/Modal";
import PralineList from "../PralineList/PralineList";

export default function MainPage() {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  // eslint-disable-next-line operator-linebreak
  const [selectedPraline, setSelectedPraline] = useState(null);
  const [slotId, setSlotId] = useState(null);
  const [boxsize, setBoxsize] = useState(9);
  const [pralineList, setPralineList] = useState([]);
  const [pralineBoxName, setPralineBoxName] = useState(null);
  const [ingredientList, setIngredientList] = useState(null);

  function cancel() {
    setPralineList([]);
  }
  console.log("selectedPraline", selectedPraline);

  function handleAddPraline(newpraline) {
    const newArray = pralineList;
    newArray[slotId] = newpraline;
    setPralineList(newArray);
  }
  console.log("pralineList", pralineList);

  function handleUpdateIngredients(praline) {
    const { ingredients } = praline;
    setIngredientList(
      ingredients.map((ingredient) => (
        <div key={ingredient.id}>{ingredient.ingredient},</div>
      ))
    );

    return ingredientList;
  }

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
          {pralineList[i]?.name}
          {pralineList[i]?.imageId && (
            <Image
              width="100"
              height="100"
              src={`https://res.cloudinary.com/dtz3vpjks/image/upload/v1691655286/${pralineList[i].imageId}.png`}
              sizes="50vw"
              alt={pralineList[i]?.name}
            />
          )}
          {/* {pralineList[i]?.imageId} */}
        </StyledBox>
      );
    }
    return boxes;
  };

  return (
    <>
      <InputField
        type="number"
        min="3"
        max="16"
        id="boxsize"
        label="Gewünschte Pralinenanzahl"
        value={boxsize}
        onChange={(event) => {
          setBoxsize(event.target.value);
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
      <h2>{pralineBoxName}</h2>
      <StyledWrapper>{getBoxes()}</StyledWrapper>

      {isModalVisible && (
        <Modal onClose={() => setIsModalVisible(false)} title="Pralinenauswahl">
          <PralineList
            buttonName="auswählen"
            onSelectPraline={(praline) => {
              setSelectedPraline(praline);
              handleAddPraline(praline);
              handleUpdateIngredients(praline);
            }}
          />
        </Modal>
      )}
      <div>Zutaten: {ingredientList}</div>
      <button type="button" onClick={cancel}>
        Pralinenschachtel zurücksetzen
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
