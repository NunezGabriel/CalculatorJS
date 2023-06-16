/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Header({children}){
    return <header css={
        css`
        height: 50px;
        width: 100%;
        background-color: #06B6D4;
        color: white;
        font-weight: 800;
        margin: 0 auto;
       
    `}>{children}</header>
}

export default Header