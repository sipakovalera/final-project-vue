import { createStore } from "vuex";
import actions from "./modules/users/actions";
import mutations from "./modules/users/mutations";
import state from "./modules/users/state";
import contacts from "./modules/users/index";
import auth from "./modules/auth/index";
import getters from "./modules/users/getters";

export default createStore({
  modules: {
    contacts,
    auth
  },
  stateStore: {
    return: {}
  },
  mutations,
  getters,
  actions,
  state
});
