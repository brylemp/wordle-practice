async function validateWord(word) {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

  return response.status === 404 ? false : true
}

export default validateWord;