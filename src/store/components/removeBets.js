import {removeNumbers} from '../helpers'

export const REMOVE_BETS = (state) => {
  // current chip
  state.current_chip = state.current_chip + state.number_checked.length + state.outside_bets_names.length;
  state.chip_ammount_won = null;
  state.number_zero = removeNumbers(state.number_zero);
  state.number_first_column = removeNumbers(state.number_first_column);
  state.number_second_column = removeNumbers(state.number_second_column);
  state.number_third_column = removeNumbers(state.number_third_column);
  //Column
  state.column1_numbers = removeNumbers(state.column1_numbers);
  state.column2_numbers = removeNumbers(state.column2_numbers);
  state.column3_numbers = removeNumbers(state.column3_numbers);

  //Dozen
  state.dozen1_numbers = removeNumbers(state.dozen1_numbers);
  state.dozen2_numbers = removeNumbers(state.dozen2_numbers);
  state.dozen3_numbers = removeNumbers(state.dozen3_numbers);

  //One 2 one
  state.low_numbers = removeNumbers(state.low_numbers);
  state.even_numbers = removeNumbers(state.even_numbers);
  state.red_numbers = removeNumbers(state.red_numbers);
  state.black_numbers = removeNumbers(state.black_numbers);
  state.odd_numbers = removeNumbers(state.odd_numbers);
  state.high_numbers = removeNumbers(state.high_numbers);

  //Racetrack
  state.cylinder_numbers = removeNumbers(state.cylinder_numbers);
  state.orphelin_numbers = removeNumbers(state.orphelin_numbers);
  state.voison_numbers = removeNumbers(state.voison_numbers);
  state.jeu0_numbers = removeNumbers(state.jeu0_numbers);

  state.outside_bets = [];
  state.outside_bets_names = [];
  state.number_checked = [];
  state.remove_bet_btn = false;
}

export const removeBets = (context) => {
  context.commit('REMOVE_BETS')
}
