<template>
  <div>
    <multiselect :options="this.options" v-model="value" v-on:input="clickoption">
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
      value: null
    }
  },
  created: function () {
    this.$http.get('/option').then((result) => {
      this.options = result.data
      console.log(this.options)
    }).catch(function (error) {
      console.log(error)
    })
  },
  methods: {
    clickoption: function (value, id) {
      this.$emit('clicked', value)
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
