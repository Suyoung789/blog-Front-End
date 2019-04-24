<template>
  <div>
    <multiselect :options="options.category_name" v-model="value">
    </multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  components: {
    Multiselect
  },
  data () {
    return {
      options: [],
      value: ''
    }
  },
  created: function () {
    this.$http.get('/category').then((result) => {
      console.log(result.data)
      this.options = result.data
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
