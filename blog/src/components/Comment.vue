<template>
  <div class="comment-wrapper">
    <div class="comment">Comments(2)</div>
    <div class="comment-container">
      <div class="comment-name">인상민</div>
      <div class="comment-date">2019.02.14</div>
      <div class="comment-content">comment</div>
    </div>
    <div class="comment-container">
      <div class="comment-name">인상민</div>
      <div class="comment-date">2019.02.14</div>
      <div class="comment-content">comment</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment'
}
</script>

<style scoped>
.comment-wrapper {
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  flex-direction: column;
}
.comment {
  width: 60%;
  font-size: 18px;
}
.comment-container {
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-top: 2%;
}
.comment-name {
  font-size: 15px;
  color: #292929;
}
.comment-date {
  font-size: 12px;
  color: #939090;
}
.comment-content {
  border-bottom: 1px solid #d3d3d3;
  margin-top: 0.5%;
  padding: 1%;
  font-size: 16px;
  color: #292929;
}
</style>
