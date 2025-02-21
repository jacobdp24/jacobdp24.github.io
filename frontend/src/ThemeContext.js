import React, { createContext, useContext, useReducer } from "react";
import Reducer from "./reducers/reducer";

const initialState = {
  darkMode: true,
};

const ThemeContext = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default ThemeContext;
