export default {
  register(state, user) {
    state.user = user
  },
  login(state, token, user) {
    state.token = token,
    state.token = user
  },
  logout(state) {
    state.token = null
  }
};
