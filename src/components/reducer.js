
const reducer = (state, action) => {
  switch (action.type) {
    case 'loadWordToGuessArray':
      console.log(action.payload)
      return {...state, wordToGuessArray: action.payload.wordToGuessArray, wordToGuess: action.payload.wordToGuess}

    case 'revealLetters':
      console.log(action.payload)
      const newArray = state.wordToGuessArray.map(letterObject => {
        if (letterObject.character === action.payload) {
          return({...letterObject, guessed: true})
        }
        return(letterObject)
      })
      console.log(newArray)
      if (newArray.every((letterObject) => letterObject.guessed)) {
        console.log('game won')
        return {...state, wordToGuessArray: newArray, gameStatus: 'gameWon'}
      }
      return {...state, wordToGuessArray: newArray}

    case 'increaseMistakesCount':
      const mistakes = state.mistakes + 1
      if (mistakes >= 7)
        return (
          {...state, mistakes: state.mistakes + 1, gameStatus: 'gameLost'}
        )
      return {...state, mistakes: state.mistakes + 1}
    default:
      return state
  }
}

export default reducer