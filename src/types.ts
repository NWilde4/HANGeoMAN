type GameStatus =
  | 'gameOn'
  | 'gameWon'
  | 'gameLost'

interface GamesCount {
  gamesWon: number,
  gamesLost: number
}

export interface WordToGuessArray {
  character: string,
  guessed: boolean
}

export interface Country {
  name: string,
  flagUrl: string
}

export interface StartNewGameProp {
  startNewGame: (countryArray: Array<Country>) => void
}

export interface GameState {
  mistakes: number,
  gameStatus: GameStatus,
  wordToGuess: string,
  countryFlagUrl: string
  gamesCount: GamesCount,
  wordToGuessArray: WordToGuessArray[],
  countries: Country[],
}
