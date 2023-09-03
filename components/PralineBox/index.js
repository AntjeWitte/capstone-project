import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";
import InputField from "../PralineForm/InputField";
import { Print, StyledBox, StyledWrapper } from "./box.styled";
import Modal from "../Modal/Modal";
import PralineList from "../PralineList/PralineList";

export default function MainPage() {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [slotId, setSlotId] = useState(null);
  const [boxsize, setBoxsize] = useState(9);
  const [pralineList, setPralineList] = useState([]);
  const [pralineBoxName, setPralineBoxName] = useState("");

  function cancel() {
    setPralineList([]);
    setPralineBoxName("");
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
    .sort((a, b) => (a.amount > b.amount ? -1 : 1));

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
    .sort((a, b) => (a.amount > b.amount ? -1 : 1));

  function handleAddPraline(newpraline) {
    const newArray = pralineList;
    newArray[slotId] = newpraline;
    setPralineList(newArray);
  }
  console.log("pralineList", pralineList);

  const weightSum = pralineList.reduce(
    (sum, current) => sum + parseFloat(current.weight, 10),
    0
  );

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
      <Print>
        <h2>{pralineBoxName}</h2>
        <StyledWrapper>{getBoxes()}</StyledWrapper>

        {isModalVisible && (
          <Modal
            onClose={() => setIsModalVisible(false)}
            title="Pralinenauswahl"
          >
            <PralineList
              buttonName="auswählen"
              onSelectPraline={(praline) => {
                handleAddPraline(praline);
              }}
            />
          </Modal>
        )}
        <div>Gewicht: {weightSum} g</div>
        <div>
          Zutaten:{" "}
          <div>
            {ingredientList.map((ingredient) => ingredient.name).join(", ")}
          </div>
        </div>
        <div>
          Allergenspuren:{" "}
          <div>
            {allergyList.map((ingredient) => ingredient.name).join(", ")}
          </div>
        </div>
      </Print>
      <button type="button" onClick={cancel}>
        Pralinenschachtel zurücksetzen
      </button>
      <button type="button" onClick={() => window.print()}>
        Speichern / Drucken
      </button>
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
