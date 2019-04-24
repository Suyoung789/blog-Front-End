<template>
  <div class="menu-bar">
    <router-link class="menu" v-for="item in itmes" :key="item.id" :to = "item.link">{{ item.menu }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  data: function () {
    return {
      itmes: [
        { menu: '최근 글', link: '/' },
        { menu: '소개', link: '/intro' },
        { menu: '글쓰기', link: '/writing' }
      ]
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.menu-bar {
  text-align: center;
  margin-top: 3%;
  margin-bottom: 5%;
}
.menu {
  padding: 1.5%;
  text-decoration: none;
  color: #292929;
  font-size: 18px;
  font-weight: 400;
}
.menu:hover {
  text-decoration: underline;
  text-underline-position: under;
  color: #acd132;
  width: 1%;
}
</style>
