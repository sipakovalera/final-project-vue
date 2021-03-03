export default {
  userCreate: ({ commit }, { name, phone, email, role }) => {
    commit("addUser", { name, phone, email, role });
    console.log(name, role);
  },
  userEdit: ({ commit }, { name, phone, email }) => {
    commit("editUser", { name, phone, email });
  },
  userDelete: ({ commit }, id) => {
    console.log("go delete");
    setTimeout(() => {
      commit("deleteUser", id);
    }, 1000);
  }
};
