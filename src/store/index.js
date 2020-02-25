import Vue from 'vue'
import Vuex from 'vuex'
import state from './initialState'
import {
  onlyUnique,
  removeNumbers,
  checkNumbers,
  getGameResult,
  winningWithOutsideBets,
  winningWithNumberBets,
  previouseNumberBets,
  previouseOutsideBets } from './helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    GAME_RESULT: (state) => {
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
      
    },
    CLOSE_LIST: (state) => {
      state.info_list = !state.info_list
    },
    GET_NUMBER_BETS: (state, payload) => {
      state.chip_effect.play();
      state.number_zero = checkNumbers(state.number_zero, payload);
      state.number_first_column = checkNumbers(state.number_first_column, payload);
      state.number_second_column = checkNumbers(state.number_second_column, payload);
      state.number_third_column = checkNumbers(state.number_third_column, payload);

      state.number_checked = payload.checked ? state.number_checked.concat(payload.numbers) : 
          state.number_checked.filter(item => item !== payload.numbers);
      
      // current chip
      payload.checked ? state.current_chip = state.current_chip - 1 : state.current_chip = state.current_chip + 1
    },
    GET_OUTSIDE_BETS: (state, payload) => {
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
    },
    REMOVE_BETS: (state) => {
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
    },
    SPIN_BALL: (state) => {
      window.localStorage.clear();

      let removeWinner = document.querySelectorAll('.form-check-label, .number');
      removeWinner.forEach(el => el.classList.remove('winner-number'));

      state.ball_effect.play();
      state.chip_ammount_won = null;
      state.spin_btn = !state.spin_btn;
      state.rotate_wheel = state.spin_btn ? 'rotate-right' : 'rotate-left',
      state.rotate_ball = state.spin_btn ? 'rotate-left show' : 'rotate-right show',
      state.button_text = 'Place your bets please!';
      state.disabled_spin = 'disabled';
      state.output_number = null;
      state.show_timer = true;
      state.winning_with = [];
    },
    NO_MORE_BETS: (state) => {
      state.button_text = 'No more bets!';
      state.remove_bet_text = 'Bets accepted';
      state.disabled_btn = 'disabled';
      state.show_timer = false;

      //Setting up localStorage
      if (typeof(Storage) !== 'undefined') {
        window.localStorage.setItem('number_checked', JSON.stringify(state.number_checked));
        window.localStorage.setItem('outside_bets_names', JSON.stringify(state.outside_bets_names));
      }
    },
    RESET_CHIPS: (state) => {
      window.localStorage.clear();
      state.current_chip = 20
      state.show_prev_bet_btn = false
    },
    PREV_BET: (state) => {
      state.show_prev_bet_btn = false
      state.outside_bets_names = JSON.parse(window.localStorage.getItem('outside_bets_names')),
      state.number_checked = JSON.parse(window.localStorage.getItem('number_checked')),
      state.number_zero = previouseNumberBets(state.number_checked, state.number_zero),
      state.number_first_column = previouseNumberBets(state.number_checked, state.number_first_column),
      state.number_second_column = previouseNumberBets(state.number_checked, state.number_second_column),
      state.number_third_column = previouseNumberBets(state.number_checked, state.number_third_column),
      state.low_numbers = previouseOutsideBets(state.outside_bets_names, state.low_numbers),
      state.even_numbers = previouseOutsideBets(state.outside_bets_names, state.even_numbers),
      state.red_numbers = previouseOutsideBets(state.outside_bets_names, state.red_numbers),
      state.black_numbers = previouseOutsideBets(state.outside_bets_names, state.black_numbers),
      state.odd_numbers = previouseOutsideBets(state.outside_bets_names, state.odd_numbers),
      state.high_numbers = previouseOutsideBets(state.outside_bets_names, state.high_numbers),
      state.dozen1_numbers = previouseOutsideBets(state.outside_bets_names, state.dozen1_numbers),
      state.dozen2_numbers =  previouseOutsideBets(state.outside_bets_names, state.dozen2_numbers),
      state.dozen3_numbers = previouseOutsideBets(state.outside_bets_names, state.dozen3_numbers),
      state.cylinder_numbers = previouseOutsideBets(state.outside_bets_names, state.cylinder_numbers),
      state.orphelin_numbers = previouseOutsideBets(state.outside_bets_names, state.orphelin_numbers),
      state.voison_numbers = previouseOutsideBets(state.outside_bets_names, state.voison_numbers),
      state.jeu0_numbers = previouseOutsideBets(state.outside_bets_names, state.jeu0_numbers),
      state.column1_numbers = previouseOutsideBets(state.outside_bets_names, state.column1_numbers),
      state.column2_numbers = previouseOutsideBets(state.outside_bets_names, state.column2_numbers),
      state.column3_numbers = previouseOutsideBets(state.outside_bets_names, state.column3_numbers),
      state.current_chip = state.current_chip - (state.number_checked.length + state.outside_bets_names.length)
    }
  },
  actions: {
    closeList: (context) => {
      context.commit('CLOSE_LIST')
    },
    getNumberBets: (context, payload) => {
      context.commit('GET_NUMBER_BETS', payload)
    },
    getOutsideBets: (context, payload) => {
      context.commit('GET_OUTSIDE_BETS', payload)
    },
    removeBets: (context) => {
      context.commit('REMOVE_BETS')
    },
    spinBall: (context) => {
      context.commit('SPIN_BALL')
    },
    noMoreBets: (context) => {
      context.commit('NO_MORE_BETS')
    },
    gameResult: (context) => {
      context.commit('GAME_RESULT')
    },
    resetChips: (context) => {
      context.commit('RESET_CHIPS')
    },
    prevBet: (context) => {
      context.commit('PREV_BET')
    }
  },
  
})
