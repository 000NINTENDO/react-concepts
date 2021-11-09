import React, { useState } from "react";

interface TestComponentProps {
  handleClick?: () => void;
}

const TestComponent = ({ handleClick }: TestComponentProps) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div aria-label="container">
      <button
        aria-label="click-button"
        onClick={() => {
          if (handleClick) handleClick();
          setClicked(true);
        }}
      >
        Click me
      </button>

      {clicked && <div data-testid="hide-content">Click event is fired</div>}
    </div>
  );
};

export default TestComponent;
