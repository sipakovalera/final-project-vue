import axios from "axios"

export default {
  async register({ commit }, user) {
    const response = await axios.post('/register', user)
    commit('register', response)
  },
  async login({ commit }, {login, password}) {
   const response = await axios.post('/login', {login, password})
   console.log(response.data.user.name)
   const token = await response.data.token;
   localStorage.setItem('token', token);
   commit('login', token) 
  },
  logout({ commit }) {
    return new Promise(resolve => {
      commit("logout");
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      resolve();
    });
  }
};
