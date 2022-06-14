import { createContext, useContext, useReducer } from "react";
import reducer from "./Reducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const initialstate = {
        text: "",

    }

    const [state, dispatch] = useReducer(reducer, initialstate);

    const setText = (textareastate) => {
        dispatch({
            type: "SET_TEXTAREASTATE",
            payload: textareastate
        });
    };

    const uppercase = () => {
        dispatch({
            type: "UPPERCASE"
        });
    };

    const lowercase = () => {
        dispatch({
            type: "Lowercase"
        });
    };

    const clear = () => {
        dispatch({
            type: "CLEAR"
        });
    };

    return (
        <AppContext.Provider value={{...state, setText, uppercase, lowercase, clear}}>
            { children }
        </AppContext.Provider>
    );
};


const useGlobalContext = () => {
    return useContext(AppContext)
};

export { AppContext, AppProvider, useGlobalContext };