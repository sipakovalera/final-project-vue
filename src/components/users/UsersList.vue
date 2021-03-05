<template>
  <div>
<user-table :users_data="users"></user-table>    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import UserTable from './UserTable.vue';


export default {
  components:{
    UserTable
  },
  computed :{
    ...mapGetters("users", ["users"])
  },
  methods: {
    ...mapActions("users", ["getUsers"])
  },
  mounted() {
    this.getUsers()
  },
}
</script>
