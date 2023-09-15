import { render, screen } from "@testing-library/react";
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

test("every new ingredient is added with id to ingredientlist", async () => {
  const user = userEvent.setup();
  const handleAddIngredient = jest.fn();
  render(<PralineForm onAddIngredient={handleAddIngredient} />);
  const ingredientInput = screen.getByTestId("ingredient");
  const submitButton = screen.getByTestId("ingredient-button");
  await user.type(ingredientInput, "Kakaobutter");
  await user.click(submitButton);
  expect(ingredientInput).toHaveDisplayValue({
    ingredient: "Kakaobutter",
    amount: " ",
    id: typeof string,
  });
});

test("button zurücksetzen clears all input field states", async () => {
  const user = userEvent.setup();
  const cancel = jest.fn();
  render(<PralineForm onClick={cancel} />);
  const nameField = screen.getByTestId("name");
  const versionField = screen.getByTestId("version");
  const weightField = screen.getByTestId("weight");
  const ingredientField = screen.getByTestId("ingredient");
  const allergyField = screen.getByTestId("traces");
  const button = screen.getByTestId("zurücksetzen");
  await user.type(nameField, "Trüffel");
  await user.type(versionField, "zwei");
  await user.type(weightField, "elf");
  await user.type(ingredientField, "Zucker");
  await user.type(allergyField, "Erdnuss");
  await user.click(button);
  expect(nameField).toHaveValue("");
  expect(versionField).toHaveValue("");
  expect(weightField).toHaveValue("");
  expect(ingredientField).toHaveValue([]);
  expect(allergyField).toHaveValue([]);
});
