import React, { useState } from "react";
import { StyledButton, StyledButtonGrid } from "./PralineForm.styled";
import {
  StyledInputFieldIngredient,
  StyledInputFieldWeight,
  StyledInputLabelWrap,
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
      <StyledInputLabelWrap htmlFor={id}>
        {`${label}: `}
        <StyledInputFieldIngredient
          type="text"
          id={id}
          name={id}
          data-testid={id}
          value={value}
          placeholder={placeholder}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />{" "}
        <StyledInputFieldWeight
          type="number"
          id={`${id}-amount`}
          name={`${id}-amount`}
          data-testid={`${id}-amount`}
          placeholder="g"
          value={amount}
          onChange={(event) => {
            const ingredientAmount = event.target.value;

            const fixedValue = Math.max(0, Math.min(100, ingredientAmount));

            setAmount(fixedValue);
          }}
        />
        <StyledButtonGrid
          type="button"
          data-testid={`${id}-button`}
          onClick={handleAddIngredient}
        >
          +
        </StyledButtonGrid>
      </StyledInputLabelWrap>
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
