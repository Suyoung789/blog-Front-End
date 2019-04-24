<template>
  <div>
    <post-detail-body />
    <comment />
  </div>
</template>

<script>
import PostDetailBody from '../components/PostDetailBody'
import Comment from '../components/Comment'
export default {
  name: 'PostDetail',
  components: {
    PostDetailBody,
    Comment
  }
}
</script>

<style>

</style>
