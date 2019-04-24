<template>
     <div class="profile-container">
      <img src="../assets/profile.png" class="profile-img">
      <div class="profile-box">
        <p class="name">류수영</p>
        <hr class="profile-hr">
        <p class="intro">안녕하세요 대덕소프트웨어 마이스터고 개발과 2학년에 재학중인 류수영입니다.<br />Python과 백엔드 개발에 관심이 있습니다. 백엔드 개발자가 꿈입니당</p>
        <div class="logo-box">
          <img src="../assets/github.png" class="github-logo">
          <img src="../assets/mail.png" class="mail-logo">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
@import url(https://cdn.jsdelivr.net/gh/theeluwin/NotoSansKR-Hestia@master/stylesheets/NotoSansKR-Hestia.css);
@import url(http://fonts.googleapis.com/earlyaccess/hanna.css);
* {
    margin: 0;
    border: 0;
}

.profile-wrapper {
  display: flex;
  width: 100vw;
  height: 13rem;
  justify-content: center;
  align-content: center;
}

.profile-container {
  display: flex;
  width: 100vw;
  margin-top:3rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;

}
.profile-box {
  margin-left: 3%;
  flex-direction: column;
  display: flex;
}
.profile-img {
  width: 130px;
}
.profile-hr {
  border: 0.5px solid rgba(112, 112, 112, 0.81);
  margin: 1% 1% 1% 0%;
}
.name, .intro {
  font-family: 'Noto Sans Korean', sans-serif;
}
.name {
  font-size: 25px;
  margin:1% 1% 0.5% 0%;
  font-weight: 400;
}
.intro {
  font-size: 12px;
  color: #343434;
  font-weight: 400;
  opacity: 0.9;
}
.github-logo, .mail-logo {
  width: 2%;
  margin: 0.5% 0 0 0;
}
</style>
