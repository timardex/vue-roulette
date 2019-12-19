import Vue from 'vue'
import Vuex from 'vuex'
import initialState from './initialState'
import {checkNumbers, onlyUnique, removeBets} from './helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    initialState
  },
  mutations: {
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
      state.initialState.number_zero = removeBets(state.initialState.number_zero);
      state.initialState.number_first_column = removeBets(state.initialState.number_first_column);
      state.initialState.number_second_column = removeBets(state.initialState.number_second_column);
      state.initialState.number_third_column = removeBets(state.initialState.number_third_column);
      //Column
      state.initialState.column1_numbers = removeBets(state.initialState.column1_numbers);
      state.initialState.column2_numbers = removeBets(state.initialState.column2_numbers);
      state.initialState.column3_numbers = removeBets(state.initialState.column3_numbers);

      //Dozen
      state.initialState.dozen1_numbers = removeBets(state.initialState.dozen1_numbers);
      state.initialState.dozen2_numbers = removeBets(state.initialState.dozen2_numbers);
      state.initialState.dozen3_numbers = removeBets(state.initialState.dozen3_numbers);

      //One 2 one
      state.initialState.low_numbers = removeBets(state.initialState.low_numbers);
      state.initialState.even_numbers = removeBets(state.initialState.even_numbers);
      state.initialState.red_numbers = removeBets(state.initialState.red_numbers);
      state.initialState.black_numbers = removeBets(state.initialState.black_numbers);
      state.initialState.odd_numbers = removeBets(state.initialState.odd_numbers);
      state.initialState.high_numbers = removeBets(state.initialState.high_numbers);

      //Racetrack
      state.initialState.cylinder_numbers = removeBets(state.initialState.cylinder_numbers);
      state.initialState.orphelin_numbers = removeBets(state.initialState.orphelin_numbers);
      state.initialState.voison_numbers = removeBets(state.initialState.voison_numbers);
      state.initialState.jeu0_numbers = removeBets(state.initialState.jeu0_numbers);

      state.initialState.outside_bets = [];
      state.initialState.outside_bets_names = [];
      state.initialState.number_checked = [];
      state.initialState.remove_bet_btn = false;
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
    }
  },
  
})
