async function getWord(length) {
  const response = await fetch(`https://random-word-api.vercel.app/api?words=1&length=${length}&type=uppercase`)
  const jsonData = await response.json();

  return jsonData[0]
}

export default getWord;