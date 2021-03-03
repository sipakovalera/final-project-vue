<template>
  <li>
    <h2>
      <span>
        <input type="text" :value="name" @click="toggleInput" />
      </span>
      <span @click="editUser(name, id)" v-if="toggleAreVisible">
        <i class="far fa-check-circle"></i>
      </span>
      <span class="delete" @click="deleteUser(id)">
        <i class="fas fa-user-times" id="delete"></i>
      </span>
    </h2>
    <div class="btn-group">
      <div class="role" :class="roleClass">{{ role }}</div>
      <button @click="toggleDetails" class="details">
        {{ detailsAreVisible ? "Hide" : "Show" }} Details
      </button>
    </div>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        <input type="text" :value="phone" @click="toggleInput" />
        <span @click="editUser(phone, id)" v-if="toggleAreVisible"
          ><i class="far fa-check-circle"></i
        ></span>
      </li>
      <li>
        <strong>Email:</strong>
        <input type="text" :value="email" @click="toggleInput" />
        <span @click="editUser(email, id)" v-if="toggleAreVisible"
          ><i class="far fa-check-circle"></i
        ></span>
      </li>
    </ul>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    id: String,
    name: String,
    phone: String,
    email: String,
    role: String
  },
  name: "userItem",
  data() {
    return {
      detailsAreVisible: false,
      toggleAreVisible: false
    };
  },
  computed: {
    roleClass() {
      if (this.role === "Friend") {
        return "role--friend";
      }
      if (this.role === "Family") {
        return "role--family";
      }
      if (this.role === "Colleague") {
        return "role--colleague";
      }
      return null;
    }
  },
  methods: {
    ...mapActions("contacts",["userEdit", "userDelete"]),
    editUser(newName, newPhone, newEmail, id) {
      this.toggleAreVisible = !this.toggleAreVisible;
      if (newName) {
        this.userEdit({ id: id, name: newName });
      }
      if (newPhone) {
        this.userEdit({ id: id, phone: newPhone });
      }
      if (newEmail) {
        this.userEdit({ id: id, email: newEmail });
      }
    },
    deleteUser(id) {
      this.userDelete(id);
    },
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleInput() {
      this.toggleAreVisible = !this.toggleAreVisible;
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 2px solid #b1ada1;
  padding: 1rem;
  border-radius: 5px;
  max-width: 400px;
  list-style-type: none;
  background-color: #fdf6e4;
}
#delete {
  color: #4b514a;
  transition: 0.5s ease;
}
#delete:hover {
  transition: all 0.5s ease;
  color: #ba3333;
}
input {
  border-radius: 5px;
  border: 1px solid #b1ada1;
  padding: 5px;
  width: 258px;
}
i {
  padding: 5px;
  vertical-align: middle;
  color: rgb(168, 208, 168);
  cursor: pointer;
}
h2 {
  display: flex;
  justify-content: space-between;
}
h3 {
  margin: 0.5rem 0;
}
.role,
button {
  border-radius: 5px;
  color: #252525;
  padding: 0.25rem 1rem;
  display: inline-block;
  font-size: 16px;
  background-color: #68d89e;
  color: white;
  border: 1px solid #68d89e;
}
.role--friend {
  background-color: rgb(123, 132, 235);
  border: 1px solid rgb(123, 132, 235);
  color: white;
}
.role--family {
  background-color: #e26e95;
  border: 1px solid #e26e95;
  color: white;
}
.role--colleague {
  background-color: #68d89e;
  color: white;
  border: 1px solid #68d89e;
}

button.details {
  border: 1px solid #b1ada1;
  background-color: #e4d7d7;
  margin-left: 20px;
  cursor: pointer;
  transition: 0.5s ease;
  opacity: 0.7;
}
button.details:hover {
  transition: all 0.5s ease;
  opacity: 1;
}
.btn-group {
  display: flex;
  justify-content: space-between;
}
</style>
