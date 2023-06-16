/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Result({children}){
    return <div css={
    css`
    height: 50px;
    background-color: white;
    padding: 11px 20px;
    margin: 0 auto;
`}>{children}</div>
}

export default Result