import React from "react";
import './Button.css';

const Button = ({data, style}) => {
    return(
        <div className="Button">
            <button className="btn" style={style}>{data}</button>
        </div>
    )
}

export default Button;