import { previouseNumberBets, previouseOutsideBets } from '../helpers'

export const PREV_BET =  (state) => {
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

export const prevBet = (context) => {
  context.commit('PREV_BET')
}
