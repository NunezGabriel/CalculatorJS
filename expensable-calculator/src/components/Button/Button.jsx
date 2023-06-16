/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({type, value, onClick}){
    return <input type={type} value={value} onClick={onClick}
    css={css`
        height: 50px;
        width: 50px;
        background-color: white;

    `}/>
}
export default Button