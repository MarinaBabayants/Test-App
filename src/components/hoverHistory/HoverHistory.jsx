import React from "react"
import "./hoverHistory.css"

const HoverHistory = ({history}) => {
    return (
        <>
            <h1>History</h1>
            {history.map((item, index) => {
                return <li
                    className="historyItem"
                    key={index + 1}
                >
                    row {item.row} col {item.col}
                </li>
            })}
        </>
    )
}

export default HoverHistory
