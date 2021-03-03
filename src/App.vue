<template>
  <div>
    <nav-link></nav-link>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavLink from "./components/navigation/NavLink";

export default {
  components: {
    NavLink
  },
    created() {
    this.$http.interceptors.response.use(undefined, (err) => {
      return new Promise(function() {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("auth", ["logout"])
        }
        throw err;
      });
    });
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
  background-color: rgba(241, 248, 247, 0.231);
}
#app {
  font-family: "Montserrat", sans-serif;
}
main {
  display: flex;
  justify-content: center;
}
button,
button:active,
button:focus {
  outline: none;
}
</style>
