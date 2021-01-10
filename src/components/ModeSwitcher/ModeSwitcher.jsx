import React, {useRef, useState} from "react";
import "./modeSwitcher.css"
import {useOutsideClosing} from "../../utils/hooks";

const ModeSwitcher = ({options, onChangeMode, clear}) => {

    const [isOpen, showDropDown] = useState(false)
    const [value, setValue] = useState("Pick mode")

    const wrapperRef = useRef(null);
    useOutsideClosing(wrapperRef, () => {
        showDropDown(false)
    });

    return (
        <div className="modeSwitcher">
            <div className="dropDown" ref={wrapperRef}>
                <button className="pickMode" onClick={() => isOpen ? showDropDown(false) : showDropDown(true)}>
                    <label>{value}</label>
                </button>
                {isOpen && (
                    <ul className="modeMenu">
                        {options.map(option => {
                                return <li
                                    className="modeItem"
                                    key={option}
                                    onClick={() => {
                                        clear()
                                        setValue(option)
                                        showDropDown(false)
                                    }}
                                >{option}</li>
                            }
                        )}
                    </ul>
                )}
            </div>
            <button
                className="btn"
                onClick={() => onChangeMode(value)}
            >
                Start
            </button>
        </div>
    )
}

export default ModeSwitcher
