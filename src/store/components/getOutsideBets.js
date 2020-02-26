import {checkNumbers, onlyUnique} from '../helpers'

export const GET_OUTSIDE_BETS = (state, payload) => {
  state.chip_effect.play();
  //Column
  state.column1_numbers = checkNumbers(state.column1_numbers, payload);
  state.column2_numbers = checkNumbers(state.column2_numbers, payload);
  state.column3_numbers = checkNumbers(state.column3_numbers, payload);

  //Dozen
  state.dozen1_numbers = checkNumbers(state.dozen1_numbers, payload);
  state.dozen2_numbers = checkNumbers(state.dozen2_numbers, payload);
  state.dozen3_numbers = checkNumbers(state.dozen3_numbers, payload);

  //One 2 one
  state.low_numbers = checkNumbers(state.low_numbers, payload);
  state.even_numbers = checkNumbers(state.even_numbers, payload);
  state.red_numbers = checkNumbers(state.red_numbers, payload);
  state.black_numbers = checkNumbers(state.black_numbers, payload);
  state.odd_numbers = checkNumbers(state.odd_numbers, payload);
  state.high_numbers = checkNumbers(state.high_numbers, payload);

  //Racetrack
  state.cylinder_numbers = checkNumbers(state.cylinder_numbers, payload);
  state.orphelin_numbers = checkNumbers(state.orphelin_numbers, payload);
  state.voison_numbers = checkNumbers(state.voison_numbers, payload);
  state.jeu0_numbers = checkNumbers(state.jeu0_numbers, payload);

  state.outside_bets = payload.checked ? state.outside_bets.concat(payload.numbers).filter(onlyUnique) : 
      state.outside_bets.filter(item => !payload.numbers.includes(item)).concat(payload.numbers).filter(onlyUnique);

  state.outside_bets_names = payload.checked ? state.outside_bets_names.concat(payload.name) : 
      state.outside_bets_names.filter(item => !payload.name.includes(item));

  // current chip
  payload.checked ? state.current_chip = state.current_chip - 1 : state.current_chip = state.current_chip + 1
}

export const getOutsideBets =  (context, payload) => {
  context.commit('GET_OUTSIDE_BETS', payload)
}
