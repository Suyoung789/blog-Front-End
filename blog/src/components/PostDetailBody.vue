<template>
  <div class="body-wrapper">
    <div class="profile-container">
      <div class="profile-wrapper">
        <img src="../assets/profile.png" class="small-profile">
        <div class="intro-wrapper">
          <p class="small-name">류수영</p>
          <p class="small-intro">안녕하세요. 학생 개발자입니다.</p>
        </div>
      </div>
    </div>
    <div class="all-wrapper">
      <div class="title-container">
        <div class="title-wrapper">
          <div class="heart-wrapper">
            <img src="../assets/heart.png" class="big-heart">
            <div class="count">256</div>
          </div>
          <div class="title"><p>{{ this.info.title }}</p></div>
        </div>
      </div>
      <div class="wrapper-wrapper">
        <div class="meta-wrapper">
          <div class="date"><p>{{ formatDate(this.info.creation_time) }}</p></div>
          <div class="category"><p>{{ this.info.category }}</p></div>
        </div>
      </div>
      <div class="detail-wrapper">
        <div class="detail-body">
          <img v-for="image in this.info.images" v-bind:key="image.key" :src="`http://54.180.79.49/${image}`" class="post-img">
            <div class="post-content"><vue-markdown-it :source="this.info.content" /></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import moment from 'moment'
import VueMarkdownIt from 'vue-markdown-it'
export default {
  name: 'PostDetailBody',
  components: { VueMarkdownIt },
  data () {
    return {
      info: {}
    }
  },
  created: function () {
    this.$http.get('/post/' + this.$route.params.id).then((result) => {
      console.log(this.$route.params.id)
      this.info = result.data
      console.log(this.info)
    })
  },
  methods: {
    formatDate: function (date) {
      return moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD')
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.body-wrapper {
  display: flex;
}
.profile-wrapper {
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: flex-start;
}
.profile-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1.5%;
}
.small-profile {
  width: 6%;
  height: 100%;
}
.intro-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left:1%;
}
.small-name {
  font-size: 13px;
  font-weight: 500;
}
.small-intro {
  font-size: 11px;
  color: #292929;
  font-weight: 400;
}
.title-container {
  display: flex;
  justify-content: center;
  margin-top: 3%;
  margin-bottom: 1%;
}
.title-wrapper {
  display: flex;
  flex-direction: row;
  width: 70%;
  align-items: center;
}
.heart-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 5%;
  margin-right:2%;
}
.body-wrapper {
  display: flex;
  flex-direction: column;
}
.big-heart {
  width: 50%;
}
.count {
  font-size: 6px;
  padding-left: 4%;
}
.title {
  font-size: 29px;
}
.wrapper-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.meta-wrapper {
  display: flex;
  flex-direction: row;
  width: 60%;
  border-bottom: 1px solid #707070;
  justify-content: space-between;
  padding-bottom: 0.5%;
}
.date {
  font-size: 11px;
  color: #747272;
}
.category {
  font-size: 11px;
  color: #747272;
}
.detail-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.detail-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
}
.post-img {
  width: 20%;
  margin-top: 2%;
  margin-bottom: 2%;
}
.post-content {
  font-size: 14px;
  line-height: 1.8em;
}
</style>
