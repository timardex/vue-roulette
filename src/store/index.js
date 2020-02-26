import Vue from 'vue'
import Vuex from 'vuex'
import state from './initialState'

import {GAME_RESULT, gameResult} from './components/gameResult'
import {CLOSE_LIST, closeList} from './components/closeList'
import {GET_NUMBER_BETS, getNumberBets} from './components/getNumberBets'
import {GET_OUTSIDE_BETS, getOutsideBets} from './components/getOutsideBets'
import {REMOVE_BETS, removeBets} from './components/removeBets'
import {SPIN_BALL, spinBall} from './components/spinBall'
import {NO_MORE_BETS, noMoreBets} from './components/noMoreBets'
import {RESET_CHIPS, resetChips} from './components/resetChips'
import {PREV_BET, prevBet} from './components/prevBet'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    GAME_RESULT,
    CLOSE_LIST,
    GET_NUMBER_BETS,
    GET_OUTSIDE_BETS,
    REMOVE_BETS,
    SPIN_BALL,
    NO_MORE_BETS,
    RESET_CHIPS,
    PREV_BET
  },
  actions: {
    gameResult,
    closeList,
    getNumberBets,
    getOutsideBets,
    removeBets,
    spinBall,
    noMoreBets,
    resetChips,
    prevBet
  }
})
