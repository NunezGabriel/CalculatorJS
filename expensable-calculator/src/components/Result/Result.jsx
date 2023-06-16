/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Result({ children }) {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        height: 50px;
        background-color: white;
        margin: 0 auto;
        box-sizing: border-box;
      `}
    >
      {children}
    </div>
  );
}

export default Result;
