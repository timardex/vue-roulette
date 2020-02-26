export const CLOSE_LIST = (state) => {
  state.info_list = !state.info_list
}

export const closeList = (context) => {
  context.commit('CLOSE_LIST')
}