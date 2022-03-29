// SETUP DATA LAYER
import React, { createContext, useContext, useReducer } from 'react'


// THIS IS THE DATA LAYER
export const StateContext = createContext();


// BIULD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// THIS IS HOW WE USE IT INSIDE OF A COMPONENTS
export const useStateValue = () => useContext(StateContext);