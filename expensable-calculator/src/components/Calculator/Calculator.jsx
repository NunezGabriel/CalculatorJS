/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Calculator({ children }) {
  return (
    <div
      css={css`
        height: 305px;
        width: 256px;
        background-color: white;
        display: flex;
        flex-direction: column;
      `}
    >
      {children}
    </div>
  );
}

export default Calculator;
