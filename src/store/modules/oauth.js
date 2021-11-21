import * as oauth from '@/api/oauth'

export default {
  namespaced: true,
  state: {
    accessToken: null
  },
  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      state.accessToken = payload
    }
  },
  actions: {
    getToken ({ commit }) {
      commit('loading/SET_LOADING_STATE', true, { root: true })

      oauth.getToken()
        .then(({ data }) => {
          commit('SET_ACCESS_TOKEN', data.access_token)
        })
        .catch(error => {
          commit('SET_ACCESS_TOKEN', null)
          console.log('Error OAuth', error)
        })
        .finally(() => {
          commit('loading/SET_LOADING_STATE', false, { root: true })
        })
    }
  }
}
