import {checkNumbers} from '../helpers'

export const GET_NUMBER_BETS = (state, payload) => {
  state.chip_effect.play();
  state.number_zero = checkNumbers(state.number_zero, payload);
  state.number_first_column = checkNumbers(state.number_first_column, payload);
  state.number_second_column = checkNumbers(state.number_second_column, payload);
  state.number_third_column = checkNumbers(state.number_third_column, payload);

  state.number_checked = payload.checked ? state.number_checked.concat(payload.numbers) : 
      state.number_checked.filter(item => item !== payload.numbers);
  
  // current chip
  payload.checked ? state.current_chip = state.current_chip - 1 : state.current_chip = state.current_chip + 1
}

export const getNumberBets = (context, payload) => {
  context.commit('GET_NUMBER_BETS', payload)
}