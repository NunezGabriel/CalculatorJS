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
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
        text-align: center;
      `}
    >
      {children}
    </div>
  );
}

export default Result;
