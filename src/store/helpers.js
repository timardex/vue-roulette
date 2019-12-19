export const checkNumbers = (number, thePayload) => {
    return (
      number.map(value => value.id === thePayload.id ? 
        {...value, checked: thePayload.checked = !thePayload.checked} : value
      )
    )
  }
  
export const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
}

export const removeBets = (number) => {
  return number.map(value => value.checked ? {...value, checked: false} : value)
}