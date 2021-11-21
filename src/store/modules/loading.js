export default {
  namespaced: true,
  state: {
    isLoading: false
  },
  mutations: {
    SET_LOADING_STATE (state, payload) {
      state.isLoading = payload
    }
  }
}
