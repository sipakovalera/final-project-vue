export default {
  addUser: (state, { name, phone, email, role }) => {
    state.users.unshift({
      id: Date.now() + "",
      fullName: name,
      phone: phone,
      email: email,
      role: role
    });
  },

  editUser: (state, { name, phone, email }) => {
    if (name) {
      state.users = state.users.map(el => {
        if (el.id === name.id) {
          return { ...el, name: name };
        }
        return el;
      });
    }
    if (phone) {
      state.users = state.users.map(el => {
        if (el.id === phone.id) {
          return { ...el, phone: phone };
        }
        return el;
      });
    }
    if (email) {
      state.users = state.users.map(el => {
        if (el.id === email.id) {
          return { ...el, email: email };
        }
        return el;
      });
    }
  },
  deleteUser: (state, id) => {
    state.users = state.users.filter(user => user.id !== id);
  }
};
