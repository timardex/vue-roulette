import {
  getGameResult,
  winningWithOutsideBets,
  winningWithNumberBets } from '../helpers'

export const GAME_RESULT = (state) => {
  let _output_number = Math.floor((Math.random() * 36) + 0);
  let _winning_with_outside = [];
  let _update_outsidebet_names = [];

  let _number_is_red = getGameResult(state.list_red_numbers, _output_number);
  let _number_is_black = getGameResult(state.list_black_numbers, _output_number);
  let _number_is_dozen1 = getGameResult(state.list_dozen_1_numbers, _output_number);
  let _number_is_dozen2 = getGameResult(state.list_dozen_2_numbers, _output_number);
  let _number_is_dozen3 = getGameResult(state.list_dozen_3_numbers, _output_number);
  let _number_is_1st_column = getGameResult(state.list_first_column_numbers, _output_number);
  let _number_is_2nd_column = getGameResult(state.list_second_column_numbers, _output_number);
  let _number_is_3rd_column = getGameResult(state.list_third_column_numbers, _output_number);
  let _number_is_cylinder = getGameResult(state.list_cylinder_numbers, _output_number);
  let _number_is_orphelin = getGameResult(state.list_orphelin_numbers, _output_number);
  let _number_is_voison = getGameResult(state.list_voison_numbers, _output_number);
  let _number_is_jeu0 = getGameResult(state.list_jeu0_numbers, _output_number);

  let _text_even_odd = 
      (_output_number % 2 === 0 && _output_number !== 0) ? 'Even' : 
      (_output_number % 2 !== 0 && _output_number !== 0) ? 'Odd' :  'Neutral';

  let _text_number_color = 
      (_output_number === _number_is_red && _output_number !== 0) ? 'Red' : 
      (_output_number === _number_is_black && _output_number !== 0) ? 'Black' :  'Green';

  let _text_dozen = 
      (_output_number === _number_is_dozen1 && _output_number !== 0) ? '1st Dozen' : 
      (_output_number === _number_is_dozen2 && _output_number !== 0) ? '2nd Dozen' :  
      (_output_number === _number_is_dozen3 && _output_number !== 0) ? '3rd Dozen' :  'Not part of Dozen';

  let _text_low_high = 
      (_output_number >= 1 && _output_number <= 18) ? 'Low number (between 1 and 18)' : 
      _output_number >= 19 ? 'High number (between 19 and 36)' :  'Not part of High Low numbers';

  let _text_column = 
      (_output_number === _number_is_1st_column && _output_number !== 0) ? '1st Column' : 
      (_output_number === _number_is_2nd_column && _output_number !== 0) ? '2nd Column' :  
      (_output_number === _number_is_3rd_column && _output_number !== 0) ? '3rd Column' :  'Not part of Column';

  let _text_racetrack = 
      _output_number === _number_is_cylinder ? 'Tiers du Cylinder section' : 
      _output_number === _number_is_orphelin ? 'Orphelins section' :  
      (_output_number === _number_is_jeu0 && _output_number === _number_is_voison) || _output_number === 0 ? 'Voison du Zero and Jeu 0 section' :
      _output_number === _number_is_voison ? 'Voison du Zero section' : 'NaN';
      
  let addWinner = document.querySelectorAll(`.number-${_output_number}`);
  addWinner.forEach(el => el.classList.add('winner-number'));

  let _win_lose_with_number_bets = getGameResult(state.number_checked, _output_number);

  winningWithOutsideBets(state.low_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
  winningWithOutsideBets(state.even_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
  winningWithOutsideBets(state.red_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
  winningWithOutsideBets(state.black_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
  winningWithOutsideBets(state.odd_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
  winningWithOutsideBets(state.high_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
  winningWithOutsideBets(state.dozen1_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
  winningWithOutsideBets(state.dozen2_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
  winningWithOutsideBets(state.dozen3_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
  winningWithOutsideBets(state.cylinder_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
  winningWithOutsideBets(state.orphelin_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
  winningWithOutsideBets(state.voison_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
  winningWithOutsideBets(state.jeu0_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
  winningWithOutsideBets(state.column1_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
  winningWithOutsideBets(state.column2_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
  winningWithOutsideBets(state.column3_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);

  let _winner_is_number = state.number_checked.includes(_output_number);
  let _winning_with_number = _winner_is_number ? state.winning_with.concat(_win_lose_with_number_bets) : [];
  let _winning_with = [..._winning_with_outside, ..._winning_with_number];

  winningWithNumberBets(state.number_first_column, state.number_checked, _output_number);
  winningWithNumberBets(state.number_second_column, state.number_checked, _output_number);
  winningWithNumberBets(state.number_third_column, state.number_checked, _output_number);
  winningWithNumberBets(state.number_zero, state.number_checked, _output_number);

  state.output_number = _output_number;
  state.rotate_ball = 'hide';
  state.button_text = 'Spin it!';
  state.remove_bet_text = 'Remove bets';
  state.winning_with = _winning_with;
  state.disabled_btn = '';
  state.disabled_spin = '';
  state.info_list = true;
  state.last_numbers = state.last_numbers.concat(_output_number);
  state.text_even_odd = _text_even_odd;
  state.text_number_color = _text_number_color;
  state.text_dozen = _text_dozen;
  state.text_low_high = _text_low_high;
  state.text_column = _text_column;
  state.text_racetrack = _text_racetrack;
  state.outside_bets_names = _update_outsidebet_names;
  state.number_checked = state.number_checked.filter(item => item === _output_number); //keep just winning number
  state.show_prev_bet_btn = true

  if (state.number_checked.length && !state.outside_bets_names.length) {
    state.current_chip = state.current_chip+35
    state.chip_ammount_won = 35
  }

  if (state.outside_bets_names.length && !state.number_checked.length) {
    state.current_chip = state.current_chip+(state.outside_bets_names.length*10)
    state.chip_ammount_won = state.outside_bets_names.length*10
  }
  
  if (state.number_checked.length && state.outside_bets_names.length){
    state.current_chip = (state.current_chip+35)+(state.outside_bets_names.length*10)
    state.chip_ammount_won = (state.outside_bets_names.length*10)+35
  }
}
  
export const gameResult = (context) => {
  context.commit('GAME_RESULT')
}
