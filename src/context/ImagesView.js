import {createContext, useReducer } from 'react';

const view = 'Modeling';

const SET_VIEW = 'SET_VIEW';

const reducer = (state, action) => {
    switch(action.type){
        case SET_VIEW:
            return action.payload;
        default:
            return state;
    }
}

export const ImagesViewContext = createContext(view);

export const ImagesViewProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, view);

    function setView(view){
        dispatch({
            type: SET_VIEW,
            payload: view
        });
    }

    return(
        <ImagesViewContext.Provider value={{
            view: state,
            setView: setView
        }}>
            {children}
        </ImagesViewContext.Provider>
    )
}