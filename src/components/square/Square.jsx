import React from "react";
import "./square.css"

const Square = ({onHover, rowIndex, colIndex}) => {
    return (
        <td
            className="col"
            onMouseOver={() => onHover(rowIndex, colIndex)}
        />
    )
}

export default Square
