import React from "react";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import Home from "./home";

let container: HTMLDivElement;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

it("Renders component with or withour name props", () => {
  act(() => {
    render(<Home />, container);
  });
  expect(container.textContent).toBe("Hey Stranger!");
});

it("Renders component with name props", () => {
  act(() => {
    render(<Home name="Niten" />, container);
  });
  expect(container.textContent).toBe("Hello Niten!");
});
