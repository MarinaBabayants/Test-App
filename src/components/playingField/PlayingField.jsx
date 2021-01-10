import React from "react";
import "./playingField.css"
import Square from "../square/Square";

const PlayingField = ({size, onHover}) => {

    const generateField = (length) => {
        const fieldSize = Array.from({length}, (v, k) => k);
        return fieldSize.map((_, rowIndex) => {
            return (
                <tr
                    key={rowIndex + 1}
                >

                    {
                        fieldSize.map((_, index) => {
                            return <Square
                                key={index + 1}
                                onHover={onHover}
                                rowIndex={rowIndex + 1}
                                colIndex={index + 1}
                            />
                        })
                    }

                </tr>
            )
        })
    }

    return (
        <table className="field">
            <tbody>
            {
                generateField(size)
            }
            </tbody>
        </table>
    )
}

export default PlayingField;

