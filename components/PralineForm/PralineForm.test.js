import React, { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import PralineForm from ".";

test("form gets displayed with all inputs fields", () => {
  render(<PralineForm />);
  const nameInput = screen.getByTestId("name");
  const versionInput = screen.getByTestId("version");
  const weightInput = screen.getByTestId("weight");
  const ingredientInput = screen.getByTestId("ingredient");
  const allergyInput = screen.getByTestId("traces");
  expect(nameInput).toBeInTheDocument();
  expect(versionInput).toBeInTheDocument();
  expect(weightInput).toBeInTheDocument();
  expect(ingredientInput).toBeInTheDocument();
  expect(allergyInput).toBeInTheDocument();
});

test("every new ingredient is added to ingredientlist", async () => {
  const user = userEvent.setup();
  const handleAddIngredient = jest.fn();
  render(<PralineForm onAddIngredient={handleAddIngredient} />);
  const ingredientInput = screen.getByTestId("ingredient");
  const weightInput = screen.getByTestId("ingredient-amount");
  const submitButton = screen.getByTestId("ingredient-button");
  await user.type(ingredientInput, "Kakaobutter");
  await user.type(weightInput, "17");
  await user.click(submitButton);
  expect(screen.getByText("Kakaobutter 17 g")).toBeInTheDocument();
});

test("button zurücksetzen clears first three input fields", async () => {
  const user = userEvent.setup();
  const cancel = jest.fn();
  render(<PralineForm onClick={cancel} />);
  const nameField = screen.getByTestId("name");
  const versionField = screen.getByTestId("version");
  const weightField = screen.getByTestId("weight");
  const button = screen.getByTestId("zurücksetzen");
  await user.type(nameField, "Trüffel");
  await user.type(versionField, "2");
  await user.type(weightField, "11");
  expect(nameField).toHaveValue("Trüffel");
  expect(versionField).toHaveValue(2);
  expect(weightField).toHaveValue(11);

  await user.click(button);
  expect(nameField).toHaveValue("");
  expect(versionField).toHaveValue(null);
  expect(weightField).toHaveValue(null);
});
