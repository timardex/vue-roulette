export const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
}

export const removeNumbers = (number) => {
  return number.map(value => value.checked ? {...value, checked: false} : value)
}

export const checkNumbers = (number, payload) => {
  return (
    number.map(value => value.id === payload.id ? 
      {...value, checked: payload.checked = !payload.checked} : value
    )
  )
}

export const getGameResult = (value, outputNum) => {
  return parseInt(value.filter(number => number === outputNum))
}

export const winningWithOutsideBets = (element, stateOutsideBets, stateOutsideBetsNames, updateBetNames, winningWith, outputNum) => {
  let isChecked = element.map(value => value.checked === true);
  let isName = element.map(value => value.name).toString();
  let isNumber = element.map(value => value.numbers);
  let _outside_bets = parseInt(stateOutsideBets.filter(value => value === outputNum));
  let _outsideBets = parseInt(isNumber[0].filter(value => value === _outside_bets));
  
  if(isChecked[0] && _outside_bets === _outsideBets) {
      //update outsidebets with the wining name
      let get_winning_name = stateOutsideBetsNames.filter(item => item === isName).toString();
      updateBetNames.push(get_winning_name)

      winningWith.push(isName)
  } if(_outside_bets !== _outsideBets) { //if not a winner
      element.map(value => value.checked = false);
  }
}

export const winningWithNumberBets = (element, stateNumberChecked, outputNum) => {
  let isChecked = element.map(value => value.checked === true);
  let isNumber = element.map(value => value.numbers);
  
  let _number_checked = parseInt(stateNumberChecked.filter(value => value === outputNum));
  let _number_number_checked = parseInt(isNumber.filter(value => value === _number_checked));
 
  if(isChecked && _number_checked === _number_number_checked) {
      element.map(value => value.numbers === _number_checked ? value.checked : value.checked = false);
  } if(_number_checked !== _number_number_checked) { //if not a winner
      element.map(value => value.checked = false);
  }
}
