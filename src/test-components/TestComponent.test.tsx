import { render, screen, fireEvent } from "@testing-library/react";
import TestComponent from "./TestComponent";

test("Button click passed by props", () => {
  const handleClick = jest.fn();
  render(<TestComponent handleClick={handleClick} />);
  fireEvent.click(screen.getByText(/Click Me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
  fireEvent.click(screen.getByText(/Click Me/i));
  expect(handleClick).toHaveBeenCalledTimes(2);
});

test("Show hide content on button click", () => {
  const container = render(<TestComponent />);
  expect(container.queryByTestId("hide-content")).toBeNull();
  fireEvent.click(container.getByText(/Click me/i));
  expect(container.queryByTestId("hide-content")?.textContent).toBe(
    "Click event is fired"
  );
});
