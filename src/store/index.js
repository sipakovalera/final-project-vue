import { createStore } from "vuex";
import actions from "./modules/notes/actions";
import mutations from "./modules/notes/mutations";
import state from "./modules/notes/state";
import notes from "./modules/notes/index";
import auth from "./modules/auth/index";
import users from "./modules/users/index";
import getters from "./modules/notes/getters";

export default createStore({
  modules: {
    notes,
    auth,
    users
  },
  stateStore: {
    return: {}
  },
  mutations,
  getters,
  actions,
  state
});
