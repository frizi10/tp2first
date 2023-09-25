import React from "react";

const Button = ({action, typeBtn, click, css }) => {
    const btnCss = `btn ${typeBtn} ${css}`;

    return (
        <button className= {btnCss}  onClick ={click}>{action}</button>
    )
}
export default Button;