<template>
  <div class="user-create">
    <form @submit.prevent="addUser(userName, userPhone, userEmail, userRole)">
      <div>
        <input type="text" v-model="userName" />
        <label>Name</label>
      </div>
      <div>
        <input type="tel" v-model="userPhone" />
        <label>Phone</label>
      </div>
      <div>
        <input type="email" v-model="userEmail" />
        <label>Email</label>
      </div>
      <div>
        <select name="role" v-model="userRole">
          <option disabled value="">Choose correct category</option>
          <option value="Friend">Friend</option>
          <option value="Family">Family</option>
          <option value="Colleague">Colleague</option>
        </select>
        <label>Category</label>
      </div>
      <button>
        Create
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "user-create",
  data() {
    return {
      userName: "",
      userPhone: "",
      userEmail: "",
      userRole: ["Friend", "Family", "Colleague"]
    };
  },
  methods: {
    ...mapActions("contacts", ["userCreate"]),
    addUser() {
      this.userCreate({
        name: this.userName,
        phone: this.userPhone,
        email: this.userEmail,
        role: this.userRole
      });
      this.resetForm();
    },
    resetForm() {
      this.userName = "";
      this.userPhone = "";
      this.userEmail = "";
      this.userRole = "";
    }
  }
};
</script>

<style scoped>
.user-create {
  margin: 100px 0;
}
form {
  padding: 80px;
  border: 2px solid #b1ada1;
  border-radius: 5px;
  background-color: #f3e7c7;
}
input,
select {
  margin: 5px;
  padding: 3px;
  max-width: 250px;
  border-radius: 5px;
  border: 2px solid #b1ada1;
}
button {
  padding: 4px 20px;
  width: 180px;
  border-radius: 5px;
  border: 2px solid #b1ada1;
  background-color: #e7e1d0;
  margin: 10px 5px;
}
</style>
