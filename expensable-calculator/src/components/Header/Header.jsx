/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Header({ children, color }) {
  return (
    <header
      css={css`
        height: 50px;
        width: 100%;
        background-color: ${color};
        color: white;
        font-weight: 800;
        margin: 0 auto;
        padding: 5px 12px;
        box-sizing: border-box;
      `}
    >
      {children}
    </header>
  );
}

export default Header;
