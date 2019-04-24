<template>
  <div id="main">
    <category-bar v-on.native="test" @select="test"/>
    <div class="content">
      <profile />
      <menu-bar />
      <post-list v-bind:category="category"/>
    </div>
    <div class="category-container"></div>
  </div>
</template>

<script>
import Profile from '../components/Profile'
import MenuBar from '../components/MenuBar'
import CategoryBar from '../components/CategoryBar'
import PostList from '../components/PostList'
export default {
  components: {
    Profile,
    MenuBar,
    CategoryBar,
    PostList
  },
  data: function () {
    return { category: this.category }
  },
  methods: {
    test: function (category) {
      this.category = category
      console.log(this.category)
    }
  }
}
</script>

<style scoped>
#main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.category-container {
  width: 50%;
  text-align: right;
}
</style>
