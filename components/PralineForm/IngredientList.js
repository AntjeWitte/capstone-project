import React, { useState } from "react";

export default function IngredientList({
  label,
  id,
  onAddIngredient,
  ingredients,
  onDeleteIngredient,
  placeholder = "",
}) {
  const [value, setValue] = useState("");
  const [amount, setAmount] = useState("");

  function handleAddIngredient(event) {
    event.preventDefault();

    const ingredientWithAmount = { ingredient: value, amount: amount };
    onAddIngredient(ingredientWithAmount);
    setValue("");
    setAmount("");
  }

  return (
    <>
      <label htmlFor={id}>
        {`${label}: `}
        {/* <select name={id} id={id}>
          <option value="empty"> </option>
          <option value="zucker">Zucker</option>
          <option value="kakaomasse">Kakaomasse</option>
          <option value="vollmilchpulver">Vollmilchpulver</option>
        </select> */}
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
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.ingredient} {ingredient.amount} g{" "}
            <button
              type="button"
              onClick={() => onDeleteIngredient(ingredient.id)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
