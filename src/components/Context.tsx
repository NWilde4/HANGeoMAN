import React, { createContext } from 'react'
import { GameState } from '../types'
import { Action } from './reducer'

export const initialState: GameState = {
  mistakes: 0,
  gameStatus: 'gameOn',
  gamesCount: {
    gamesWon: Number(window.sessionStorage.getItem('gamesWon')) | 0,
    gamesLost: Number(window.sessionStorage.getItem('gamesLost')) | 0
  }
}

export const Context = createContext<{
  state: GameState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => initialState
})

interface ValueProps {
  state: GameState,
  dispatch: React.Dispatch<Action>
}

interface ProviderProps {
  value: ValueProps,
  children: React.ReactNode
}

export const ContextProvider = ({ value, children }: ProviderProps) => {
  return(
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}