import React, { useState } from "react";

export default function IngredientList({
  label,
  id,
  onAddIngredient,
  zutaten,
  onDeleteIngredient,
  placeholder = "",
}) {
  const [value, setValue] = useState("");
  const [amount, setAmount] = useState("");

  function handleAddIngredient(event) {
    event.preventDefault();

    const zutatenMitMenge = { ingredient: value, amount: amount };
    onAddIngredient(zutatenMitMenge);
    setValue("");
    setAmount("");
  }

  return (
    <>
      <label htmlFor={id}>
        {`${label}: `}
        <input
          type="text"
          id={id}
          name={id}
          value={value}
          placeholder={placeholder}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />{" "}
        <input
          type="text"
          id={`${id}-amount`}
          name={`${id}-amount`}
          value={amount}
          onChange={(event) => {
            setAmount(event.target.value);
          }}
        />{" "}
        g{" "}
        <button type="button" onClick={handleAddIngredient}>
          +
        </button>
      </label>
      <ul>
        {zutaten.map((zutat) => (
          <li key={zutat.id}>
            {zutat.ingredient} {zutat.amount} g{" "}
            <button type="button" onClick={() => onDeleteIngredient(zutat.id)}>
              -
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
