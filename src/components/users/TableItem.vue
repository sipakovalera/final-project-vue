<template>
  <div>
<p>{{row_data.name}}</p>
<p></p>
  </div>
</template>

<script>
export default {
  props:{
    row_data: {
      type: Object,
      default: () => {
      return {}
    }
    }
  }
}
</script>

<style scoped>

</style>
