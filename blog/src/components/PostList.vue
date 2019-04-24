<template>
<div class="list-container">
  <div class="post-list" v-for="post in posts" v-bind:key="post.key">
    <img :src="`http://54.180.79.49/${post.image}`" class="post-img">
    <div class="post-container" >
      <div class="post-title"><p class="text-title">{{ post.title }}</p></div>
      <div class="content-container">
        <p class="post-content">{{ post.content }}</p>
        <div class="meta-container">
          <p class="post-meta">{{ formatDate(post.creation_time) }}, {{ post.commentCount }}개</p>
          <div class="heart-container">
          <img src="../assets/heart.png" class="heart-img">
          <p class="heart-cnt">0</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'PostList',
  data () {
    return {
      posts: [],
      category: '',
      isAll: false
    }
  },
  created: function () {
    this.$EventBus.$on('category', (category) => {
      this.isAll = !this.isAll
      this.category = category
      if (this.isAll === false) {
        this.$http.get('/post', {params: {category: 'All'}}).then((result) => {
          this.posts = result.data
          console.log(result.data)
        }).catch(function (error) {
          console.log(error)
        })
      } else {
        console.log(this.category)
        this.$http.get('/post', {params: {category: this.category}}).then((result) => {
          this.posts = result.data
          console.log(result.data)
        }).catch(function (error) {
          console.log(error)
        })
      }
    })
  },
  methods: {
    tmp: function () {
      console.log(1)
    },
    formatDate: function (date) {
      return moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD')
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.list-container {
  width: 100%;
}

.post-list {
  width:50vw;
  margin: 0 auto;
  display: flex;
  margin-top: 4%;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 2%;
}
.post-list:hover {
  cursor: pointer;
}
.post-img {
  width: 156px;
  height: 150px;
}
.text-title {
  flex-wrap: nowrap;
  margin:0 0 0 25px;
  font-size: 20px;
  font-weight: 500;
}
.post-container {
  flex-direction: column;
  width: 80%;
}
.post-content {
  margin: 24px 0 0 25px;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.8;
  /* word-wrap:break-word; */
  width: 100%;
  height: 7vh;
}
.post-meta {
  font-size: 10px;
  margin: 28px 0 0 25px;
  font-weight: 300;
}
.meta-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}
.heart-img {
  width: 20%;
  height: 20%;
}
.heart-container {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: flex-end;
}
.heart-cnt {
  font-size: 12px;
}
</style>
