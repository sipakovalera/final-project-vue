<template>
  <div class="user-container">
    <user-create></user-create>
    <ul v-if="usersList.length > 0">
      <user-item
        v-for="user in usersList"
        :key="user.id"
        :id="user.id"
        :name="user.fullName"
        :phone="user.phone"
        :email="user.email"
        :role="user.role"
      ></user-item>
    </ul>
    <ul v-else class="empty-list">
      Please, create contact!
    </ul>
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";
import UserCreate from "./UserCreate.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    UserItem,
    UserCreate
  },
  computed: {
    ...mapGetters("contacts", ["usersList"])
  }
};
</script>

<style scoped>
button {
  display: block;
  margin: auto;
}
ul {
  list-style: none;
  max-width: 100%;
  padding: 0;
  width: 40%;
}
.user-container {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.empty-list {
  font-size: 20px;
  font-weight: 700;
  color: rgba(74, 44, 20, 0.667);
  margin: 150px 0;
}
</style>
