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
        id="boxsize"
        label="Gewünschte Pralinenanzahl"
        value={boxsize}
        onChange={(event) => {
          const { value } = event.target;

          const fixedValue = Math.max(3, Math.min(24, value));

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
        <h2>{pralineBoxName}</h2>
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
