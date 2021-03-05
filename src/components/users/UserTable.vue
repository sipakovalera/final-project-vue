<template>
  <div>
    <div class="table-header">
      <p>Name</p>
      <p>Email</p>
    </div>
    <table-item v-for="user in users_data" :key="user.id" :row_data="user"></table-item>
  </div>
</template>

<script>
import TableItem from './TableItem';

export default {
  components:{
    TableItem
  },
  props:{
    users_data :{
      type: Array,
      default:() => {
        []
      }
    }
  }
}
</script>
