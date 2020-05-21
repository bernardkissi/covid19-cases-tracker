export const state = () => ({
  world: []
})

export const getters = {
  getWorld(state) {
    return state.world
  }
}

export const mutations = {
  putWorld(state, payload) {
    state.world = payload
  }
}

export const actions = {
  async fetchWorld({ commit }) {
    const response = await this.$axios.get(
      'https://6e0749d2.ngrok.io/api/world'
    )
    commit('putWorld', response.data)
  },

  updateWorld({ commit }, payload) {
    commit('putWorld', payload.data)
  }
}
