/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({ type, value, onClick, area, color }) {
  return (
    <input
      type={type}
      value={value}
      onClick={onClick}
      css={css`
        margin: 0 auto;
        min-height: 50px;
        width: 50px;
        background-color: ${color ? color : "white"};
        grid-area: ${area};
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        text-align: center;
        color: #4b5563;
        border: none;
        gap: 5px;
      `}
    />
  );
}
export default Button;

//   outline: 0.5px solid;
//         border: none;
