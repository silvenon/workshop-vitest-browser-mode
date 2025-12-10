import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ExampleCombobox } from "../app/components/combobox";

test("select option", async () => {
  const user = userEvent.setup();
  render(<ExampleCombobox />);
  await user.click(screen.getByRole("combobox"));
  await user.click(screen.getByRole("option", { name: "Remix" }));
  expect(screen.getByRole("combobox")).toHaveTextContent("Remix");
});
