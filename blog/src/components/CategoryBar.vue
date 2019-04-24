<template>
  <div class="category">
    <div class="category-wrapper">
      <p class="category-header">Category</p>
      <p class="category-items" v-for="category in categories" v-bind:key="category.id" v-on:click="onClickCategory(category.category_name)">{{ category.category_name}}</p>
      <p class="category-items" v-on:click="add = !add">+</p>
      <div class="add-container" v-show="add">
        <input type="text" class="input-name" v-model="name">
        <input type="button" class="add-button" value="확인" v-on:click="add_category">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CategoryBar',
  data () {
    return {
      add: false,
      name: '',
      categories: []
    }
  },
  created: function () {
    this.$http.get('/category').then((result) => {
      console.log(result.data)
      this.categories = result.data
    }).catch(function (error) {
      console.log(error)
    })
  },
  methods: {
    add_category: function () {
      this.$http.post('/category', JSON.stringify({category_name: this.name}), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        console.log('카테고리 추가 성공')
      }).catch(function (error) {
        console.log(error)
      })
    },
    onClickCategory: function (category) {
      this.$EventBus.$emit('category', category)
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.category-container {
  justify-content: center;
  vertical-align: middle;
  display: flex;
}

.category {
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15rem;
  align-items: center;
}
.category-wrapper {
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 60%;
}
.category-header {
  display: flex;
  flex-direction: column;
  font-size: 17px;
  font-weight: 300;
  border-bottom: 1px solid #949494;
  border-width: 20%;
}
.category-items {
  font-size: 13px;
  font-weight: 300;
  margin-top: 6%;
}
.category-items:hover {
  cursor: pointer;
}
</style>
