import Vue from 'vue'
import Vuex from 'vuex'
import initialState from './initialState'
import {onlyUnique, removeNumbers, checkNumbers, getGameResult, winningWithOutsideBets, winningWithNumberBets} from './helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    initialState
  },
  mutations: {
    GAME_RESULT: (state) => {
      let _output_number = Math.floor((Math.random() * 36) + 0);
      let _winning_with_outside = [];
      let _update_outsidebet_names = [];

      let _number_is_red = getGameResult(state.initialState.list_red_numbers, _output_number);
      let _number_is_black = getGameResult(state.initialState.list_black_numbers, _output_number);
      let _number_is_dozen1 = getGameResult(state.initialState.list_dozen_1_numbers, _output_number);
      let _number_is_dozen2 = getGameResult(state.initialState.list_dozen_2_numbers, _output_number);
      let _number_is_dozen3 = getGameResult(state.initialState.list_dozen_3_numbers, _output_number);
      let _number_is_1st_column = getGameResult(state.initialState.list_first_column_numbers, _output_number);
      let _number_is_2nd_column = getGameResult(state.initialState.list_second_column_numbers, _output_number);
      let _number_is_3rd_column = getGameResult(state.initialState.list_third_column_numbers, _output_number);
      let _number_is_cylinder = getGameResult(state.initialState.list_cylinder_numbers, _output_number);
      let _number_is_orphelin = getGameResult(state.initialState.list_orphelin_numbers, _output_number);
      let _number_is_voison = getGameResult(state.initialState.list_voison_numbers, _output_number);
      let _number_is_jeu0 = getGameResult(state.initialState.list_jeu0_numbers, _output_number);

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

      let _win_lose_with_number_bets = getGameResult(state.initialState.number_checked, _output_number);

      winningWithOutsideBets(state.initialState.low_numbers, state.initialState.outside_bets, state.initialState.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
      winningWithOutsideBets(state.initialState.even_numbers, state.initialState.outside_bets, state.initialState.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
      winningWithOutsideBets(state.initialState.red_numbers, state.initialState.outside_bets, state.initialState.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
      winningWithOutsideBets(state.initialState.black_numbers, state.initialState.outside_bets, state.initialState.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
      winningWithOutsideBets(state.initialState.odd_numbers, state.initialState.outside_bets, state.initialState.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
      winningWithOutsideBets(state.initialState.high_numbers, state.initialState.outside_bets, state.initialState.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
      winningWithOutsideBets(state.initialState.dozen1_numbers, state.initialState.outside_bets, state.initialState.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
      winningWithOutsideBets(state.initialState.dozen2_numbers, state.initialState.outside_bets, state.initialState.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
      winningWithOutsideBets(state.initialState.dozen3_numbers, state.initialState.outside_bets, state.initialState.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
      winningWithOutsideBets(state.initialState.cylinder_numbers, state.initialState.outside_bets, state.initialState.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
      winningWithOutsideBets(state.initialState.orphelin_numbers, state.initialState.outside_bets, state.initialState.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
      winningWithOutsideBets(state.initialState.voison_numbers, state.initialState.outside_bets, state.initialState.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
      winningWithOutsideBets(state.initialState.jeu0_numbers, state.initialState.outside_bets, state.initialState.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
      winningWithOutsideBets(state.initialState.column1_numbers, state.initialState.outside_bets, state.initialState.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
      winningWithOutsideBets(state.initialState.column2_numbers, state.initialState.outside_bets, state.initialState.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
      winningWithOutsideBets(state.initialState.column3_numbers, state.initialState.outside_bets, state.initialState.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);

      let _winner_is_number = state.initialState.number_checked.includes(_output_number);
      let _winning_with_number = _winner_is_number ? state.initialState.winning_with.concat(_win_lose_with_number_bets) : [];
      let _winning_with = [..._winning_with_outside, ..._winning_with_number];

      winningWithNumberBets(state.initialState.number_first_column, state.initialState.number_checked, _output_number);
      winningWithNumberBets(state.initialState.number_second_column, state.initialState.number_checked, _output_number);
      winningWithNumberBets(state.initialState.number_third_column, state.initialState.number_checked, _output_number);
      winningWithNumberBets(state.initialState.number_zero, state.initialState.number_checked, _output_number);

      state.initialState.output_number = _output_number;
      state.initialState.rotate_ball = 'hide';
      state.initialState.button_text = 'Spin it!';
      state.initialState.remove_bet_text = 'Remove bets';
      state.initialState.winning_with = _winning_with;
      state.initialState.disabled_btn = '';
      state.initialState.disabled_spin = '';
      state.initialState.info_list = true;
      state.initialState.last_numbers = state.initialState.last_numbers.concat(_output_number);
      state.initialState.text_even_odd = _text_even_odd;
      state.initialState.text_number_color = _text_number_color;
      state.initialState.text_dozen = _text_dozen;
      state.initialState.text_low_high = _text_low_high;
      state.initialState.text_column = _text_column;
      state.initialState.text_racetrack = _text_racetrack;
      state.initialState.outside_bets_names = _update_outsidebet_names;
      state.initialState.number_checked = state.initialState.number_checked.filter(item => item === _output_number); //keep just winning number
    },
    CLOSE_LIST: (state) => {
      state.initialState.info_list = !state.initialState.info_list
    },
    GET_NUMBER_BETS: (state, payload) => {
      state.initialState.chip_effect.play();
      
      state.initialState.number_zero = checkNumbers(state.initialState.number_zero, payload);
      state.initialState.number_first_column = checkNumbers(state.initialState.number_first_column, payload);
      state.initialState.number_second_column = checkNumbers(state.initialState.number_second_column, payload);
      state.initialState.number_third_column = checkNumbers(state.initialState.number_third_column, payload);

      state.initialState.number_checked = payload.checked ? state.initialState.number_checked.concat(payload.numbers) : 
          state.initialState.number_checked.filter(item => item !== payload.numbers);
    },
    GET_OUTSIDE_BETS: (state, payload) => {
      state.initialState.chip_effect.play();
      //Column
      state.initialState.column1_numbers = checkNumbers(state.initialState.column1_numbers, payload);
      state.initialState.column2_numbers = checkNumbers(state.initialState.column2_numbers, payload);
      state.initialState.column3_numbers = checkNumbers(state.initialState.column3_numbers, payload);

      //Dozen
      state.initialState.dozen1_numbers = checkNumbers(state.initialState.dozen1_numbers, payload);
      state.initialState.dozen2_numbers = checkNumbers(state.initialState.dozen2_numbers, payload);
      state.initialState.dozen3_numbers = checkNumbers(state.initialState.dozen3_numbers, payload);

      //One 2 one
      state.initialState.low_numbers = checkNumbers(state.initialState.low_numbers, payload);
      state.initialState.even_numbers = checkNumbers(state.initialState.even_numbers, payload);
      state.initialState.red_numbers = checkNumbers(state.initialState.red_numbers, payload);
      state.initialState.black_numbers = checkNumbers(state.initialState.black_numbers, payload);
      state.initialState.odd_numbers = checkNumbers(state.initialState.odd_numbers, payload);
      state.initialState.high_numbers = checkNumbers(state.initialState.high_numbers, payload);

      //Racetrack
      state.initialState.cylinder_numbers = checkNumbers(state.initialState.cylinder_numbers, payload);
      state.initialState.orphelin_numbers = checkNumbers(state.initialState.orphelin_numbers, payload);
      state.initialState.voison_numbers = checkNumbers(state.initialState.voison_numbers, payload);
      state.initialState.jeu0_numbers = checkNumbers(state.initialState.jeu0_numbers, payload);

      state.initialState.outside_bets = payload.checked ? state.initialState.outside_bets.concat(payload.numbers).filter(onlyUnique) : 
          state.initialState.outside_bets.filter(item => !payload.numbers.includes(item)).concat(payload.numbers).filter(onlyUnique);

      state.initialState.outside_bets_names = payload.checked ? state.initialState.outside_bets_names.concat(payload.name) : 
          state.initialState.outside_bets_names.filter(item => !payload.name.includes(item));
    },
    REMOVE_BETS: (state) => {
      state.initialState.number_zero = removeNumbers(state.initialState.number_zero);
      state.initialState.number_first_column = removeNumbers(state.initialState.number_first_column);
      state.initialState.number_second_column = removeNumbers(state.initialState.number_second_column);
      state.initialState.number_third_column = removeNumbers(state.initialState.number_third_column);
      //Column
      state.initialState.column1_numbers = removeNumbers(state.initialState.column1_numbers);
      state.initialState.column2_numbers = removeNumbers(state.initialState.column2_numbers);
      state.initialState.column3_numbers = removeNumbers(state.initialState.column3_numbers);

      //Dozen
      state.initialState.dozen1_numbers = removeNumbers(state.initialState.dozen1_numbers);
      state.initialState.dozen2_numbers = removeNumbers(state.initialState.dozen2_numbers);
      state.initialState.dozen3_numbers = removeNumbers(state.initialState.dozen3_numbers);

      //One 2 one
      state.initialState.low_numbers = removeNumbers(state.initialState.low_numbers);
      state.initialState.even_numbers = removeNumbers(state.initialState.even_numbers);
      state.initialState.red_numbers = removeNumbers(state.initialState.red_numbers);
      state.initialState.black_numbers = removeNumbers(state.initialState.black_numbers);
      state.initialState.odd_numbers = removeNumbers(state.initialState.odd_numbers);
      state.initialState.high_numbers = removeNumbers(state.initialState.high_numbers);

      //Racetrack
      state.initialState.cylinder_numbers = removeNumbers(state.initialState.cylinder_numbers);
      state.initialState.orphelin_numbers = removeNumbers(state.initialState.orphelin_numbers);
      state.initialState.voison_numbers = removeNumbers(state.initialState.voison_numbers);
      state.initialState.jeu0_numbers = removeNumbers(state.initialState.jeu0_numbers);

      state.initialState.outside_bets = [];
      state.initialState.outside_bets_names = [];
      state.initialState.number_checked = [];
      state.initialState.remove_bet_btn = false;
    },
    SPIN_BALL: (state) => {
      let removeWinner = document.querySelectorAll('.form-check-label, .number');
      removeWinner.forEach(el => el.classList.remove('winner-number'));

      state.initialState.ball_effect.play();
      state.initialState.spin_btn = !state.initialState.spin_btn;
      state.initialState.rotate_wheel = state.initialState.spin_btn ? 'rotate-right' : 'rotate-left',
      state.initialState.rotate_ball = state.initialState.spin_btn ? 'rotate-left show' : 'rotate-right show',
      state.initialState.button_text = 'Place your bets please!';
      state.initialState.disabled_spin = 'disabled';
      state.initialState.output_number = null;
      state.initialState.show_timer = true;
      state.initialState.winning_with = [];
    },
    NO_MORE_BETS: (state) => {
      state.initialState.button_text = 'No more bets!';
      state.initialState.remove_bet_text = 'Bets accepted';
      state.initialState.disabled_btn = 'disabled';
      state.initialState.show_timer = false;
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
    }
  },
  
})
