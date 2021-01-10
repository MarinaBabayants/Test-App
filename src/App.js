import './App.css';
import React, {useEffect, useReducer} from "react";
import ModeSwitcher from "./components/ModeSwitcher/ModeSwitcher.jsx";
import PlayingField from "./components/playingField/PlayingField";
import HoverHistory from "./components/hoverHistory/HoverHistory";

const initialState = {
    history: [],
    modes: {},
    selectedMode: {
        field: 0
    }
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'getModes':
            return {...state, modes: {...action.payload}}
        case 'selectMode':
            return {...state, selectedMode: {...action.payload}}
        case 'addHistory':
            return {...state, history: state.history.concat(action.payload)}
        case 'clearHistory':
            return {...state, history: []}
        case 'clearField':
            return {...state, selectedMode: {...state.selectedMode, field: 0}}
        default:
            throw new Error();
    }
}

const App = () => {

    const [{history, modes, selectedMode}, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch("http://demo1030918.mockable.io/")
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch({type: 'getModes', payload: result})
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])

    const onChangeModeHandler = (mode) => {
        dispatch({type: 'selectMode', payload: modes[mode]})
    }

    const updateHistory = (row, col) => {
        dispatch({type: 'addHistory', payload: {col, row}})
    }

    const clearFieldAndHistory = () => {
        dispatch({type: 'clearHistory'})
        dispatch({type: 'clearField'})
    }

    return (
        <div className="appContainer">
            <div className="gameContainer">
                <ModeSwitcher
                    options={Object.keys(modes)}
                    onChangeMode={onChangeModeHandler}
                    clear={clearFieldAndHistory}
                />
                <PlayingField
                    size={selectedMode.field}
                    onHover={updateHistory}
                />
            </div>
            <div className="historyContainer">
                <HoverHistory
                    history={history}
                />
            </div>
        </div>
    );
}

export default App;
