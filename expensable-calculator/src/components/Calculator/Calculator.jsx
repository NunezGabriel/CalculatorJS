/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Calculator({children}){
    return <div css={css`
        height: 333px;
        width: 256px;
        background-color: white;
    `}>{children}</div>
}

export default Calculator