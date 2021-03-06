import { privateKey } from './utils';

export const findRhymingWords = async (word) => {
  try {
    let response = await fetch(`https://api.datamuse.com/words?ml=emotion&rel_rhy=${word}`)
      if (!response.ok) {
        console.log(response);
        throw new Error('Your request was unsuccessful. Please try again.')
      } else {
        return await response.json()
      }
  } catch (error) {
    return error.message
  }
}

export const findWordDetails = async (word) => {
  try {
    let response = await fetch(`https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${word}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Rapidapi-key': privateKey
      }
    })
    if (!response.ok) {
      throw new Error('Your request was unsuccessful. Please try again.')
    } else {
      return await response.json()
    }
  } catch (error) {
    return error.message
  }
}
