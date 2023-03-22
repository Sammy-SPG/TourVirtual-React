import { createContext, useReducer } from "react";
import ModelReducer from "./ModelReducer";

const ModelContex = createContext();

const ModelProvider = ({ children }) => {

    const initialState = {
        model: {}
    }

    const [state, dispatch] = useReducer(ModelReducer, initialState);

    return (
        <ModelContex.Provider value={{ state, dispatch }}>{children}</ModelContex.Provider>
    );
}


export { ModelContex, ModelProvider };