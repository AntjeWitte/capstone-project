import React, { useState } from "react";
import { StyledInputLabel } from "./InputField.styled";
import { StyledButton } from "./PralineForm.styled";
import {
  StyledInputFieldIngredient,
  StyledInputFieldWeight,
  StyledList,
} from "./IngredientList.styled";

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
      <StyledInputLabel htmlFor={id}>
        {`${label}: `}
        <StyledInputFieldIngredient
          type="text"
          id={id}
          name={id}
          value={value}
          placeholder={placeholder}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />{" "}
        <StyledInputFieldWeight
          type="text"
          id={`${id}-amount`}
          name={`${id}-amount`}
          placeholder="Gewicht in g"
          value={amount}
          onChange={(event) => {
            setAmount(event.target.value);
          }}
        />{" "}
        g{" "}
        <StyledButton type="button" onClick={handleAddIngredient}>
          +
        </StyledButton>
      </StyledInputLabel>
      <ul>
        {ingredients.map((ingredient) => (
          <StyledList key={ingredient.id}>
            {ingredient.ingredient} {ingredient.amount} g{" "}
            <StyledButton
              type="button"
              onClick={() => onDeleteIngredient(ingredient.id)}
            >
              -
            </StyledButton>
          </StyledList>
        ))}
      </ul>
    </>
  );
}
