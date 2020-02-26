export const NO_MORE_BETS = (state) => {
  state.button_text = 'No more bets!';
  state.remove_bet_text = 'Bets accepted';
  state.disabled_btn = 'disabled';
  state.show_timer = false;

  //Setting up localStorage
  if (typeof(Storage) !== 'undefined') {
    window.localStorage.setItem('number_checked', JSON.stringify(state.number_checked));
    window.localStorage.setItem('outside_bets_names', JSON.stringify(state.outside_bets_names));
  }
}

export const noMoreBets = (context) => {
  context.commit('NO_MORE_BETS')
}
