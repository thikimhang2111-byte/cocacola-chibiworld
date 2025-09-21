const KEY = 'wg-proto-characters-v1'
export function saveCharacter(char) {
  const arr = JSON.parse(localStorage.getItem(KEY) || '[]')
  const idx = arr.findIndex(c=>c.id===char.id)
  if (idx>=0) arr[idx]=char; else arr.push(char)
  localStorage.setItem(KEY, JSON.stringify(arr))
}
export function loadCharacters(){
  return JSON.parse(localStorage.getItem(KEY) || '[]')
}
export function deleteCharacter(id){
  const arr = loadCharacters().filter(c=>c.id!==id)
  localStorage.setItem(KEY, JSON.stringify(arr))
}