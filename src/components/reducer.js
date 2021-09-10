
const reducer = (state, action) => {
  switch (action.type) {
    case 'initializeCountries':
      return {...state, countries: action.payload}

    case 'loadWordToGuessArray':
      return {...state, wordToGuessArray: action.payload.wordToGuessArray, wordToGuess: action.payload.wordToGuess, mistakes: 0, gameStatus: 'gameOn'}

    case 'revealLetters':
      const newArray = state.wordToGuessArray.map(letterObject => {
        if (letterObject.character === action.payload) {
          return({...letterObject, guessed: true})
        }
        return(letterObject)
      })

      if (newArray.every((letterObject) => letterObject.guessed)) {
        const newGamesCount = {
          ...state.gamesCount, 
          gamesWon: state.gamesCount.gamesWon + 1
        }        

        return {...state, wordToGuessArray: newArray, gameStatus: 'gameWon', gamesCount: newGamesCount}
      }
      return {...state, wordToGuessArray: newArray}

    case 'increaseMistakesCount':
      const mistakes = state.mistakes + 1

      if (mistakes >= 7) {
        const newGamesCount = {
          ...state.gamesCount, 
          gamesLost: state.gamesCount.gamesLost + 1
        }

        const revealedWord = state.wordToGuessArray.map(letterObject => ({...letterObject, guessed: true}))

        return (
          {...state, mistakes: state.mistakes + 1, gameStatus: 'gameLost', gamesCount: newGamesCount, wordToGuessArray: revealedWord}
        )
      }
      return {...state, mistakes: state.mistakes + 1}
    default:
      return state
  }
}

export default reducer