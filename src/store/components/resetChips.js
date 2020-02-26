export const RESET_CHIPS = (state) => {
  window.localStorage.clear();
  state.current_chip = 20
  state.show_prev_bet_btn = false
}

export const resetChips = (context) => {
  context.commit('RESET_CHIPS')
}
