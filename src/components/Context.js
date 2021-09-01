import { createContext } from 'react'

export const Context = createContext(null)

export const ContextProvider = (props) => {
  return(
    <Context.Provider value={props.value}>
      {props.children}
    </Context.Provider>
  )
}