<template>
  <div>
    <profile />
    <menu-bar />
    <div class="intro-wrapper">
      <div class="intro">2001년생 고등학교 3학년에 재학중인 주니어 개발자입니다.</div>
      <div class="intro">2. python으로 백엔드 개발 중입니다.</div>
      <div class="intro">3. 느려도 꾸준히 가는 중입니다. </div>
      <div class="intro">4. 구인구직 중입니다.</div>
      <div class="intro">5. 그냥 코딩, 그냥 개발보다 알고하는 사람이 되고싶습니다. </div>
    </div>
  </div>
</template>

<script>
// import VueMarkdown from 'vue-markdown'
import Profile from '../components/Profile'
import MenuBar from '../components/MenuBar'
export default {
  name: 'Intro',
  components: {
    Profile,
    MenuBar
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.intro-wrapper {
  display: block;
  margin: 0 auto;
  height: 50vh;
  width:40vw;
}
.intro {
  line-height: 3em;
  font-size: 18px;
  opacity: 0.9;
}
</style>
