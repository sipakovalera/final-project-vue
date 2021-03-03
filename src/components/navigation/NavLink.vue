<template>
  <header>
    <nav>
      <ul>
        <li v-if="isLoggedIn">
          <router-link to="/users">Contacts</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/profile">Profile</router-link>
        </li>
        <li class="logout" v-if="isLoggedIn">
          <a @click="logoutUser">Logout</a>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/">Home</router-link>
        </li>
        <li class="login" v-if="!isLoggedIn">
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "nav-link",
  computed : {
      ...mapGetters("auth", ["isLoggedIn"])
    },
    methods: {
        ...mapActions("auth", ["logout"]),
      logoutUser() {
        this.logout(
           this.$router.push('/login')
        )
      }
    },
  };
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #6dd1c2;
}
nav {
  height: 100%;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  margin: 0 2rem;
}
a {
  text-decoration: none;
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
}
a:hover,
a:active,
a.router-link-active {
  color: #384744;
  border-color: #2d4f47;
  background-color: #55a095;
  border-radius: 5px;
}
</style>
