import React, { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import PralineBox from ".";

test("default number 9 in boxsize input field can be changed by user", async () => {
  const user = userEvent.setup();
  render(<PralineBox />);
  const boxsizeInput = screen.getByTestId("boxsize");
  expect(boxsizeInput).toHaveValue(9);
  await user.type(boxsizeInput, "{backspace}6");
  expect(boxsizeInput).toHaveValue(6);
});
