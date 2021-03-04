export default {
  noteCreate: ({ commit }, { title, describe, role }) => {
    commit("addNote", { title, describe, role });
  },
  noteEdit: ({ commit }, { title, describe }) => {
    commit("editNote", { title, describe });
  },
  noteDelete: ({ commit }, id) => {
    console.log("go delete");
    setTimeout(() => {
      commit("deleteNote", id);
    }, 1000);
  }
};
