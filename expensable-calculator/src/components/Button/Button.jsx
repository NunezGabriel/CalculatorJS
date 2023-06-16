/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({
  type,
  value,
  onClick,
  area,
  color,
  fontSize,
  textcolor,
  icon,
}) {
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
        font-size: ${fontSize ? fontSize : "20px"};
        line-height: 28px;
        text-align: center;
        color: ${textcolor ? textcolor : "#4B5563"};
        border: none;
        gap: 5px;
        background-image: ${icon ? icon : ""};
        background-size: cover;
        transition: 0.5s;
        &: hover {
          background-color: #06b6d4;
        }
      `}
    />
  );
}
export default Button;

//   outline: 0.5px solid;
//         border: none;
