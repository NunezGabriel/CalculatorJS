/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Header({ children, color, icon }) {
  return (
    <header
      css={css`
        height: 50px;
        width: 100%;
        background-color: ${color};
        color: white;
        font-weight: 800;
        margin: 0 auto;
        icon: ${icon};
      `}
    >
      {children}
    </header>
  );
}

export default Header;
