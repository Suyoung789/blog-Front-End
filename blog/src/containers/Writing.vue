<template>
  <div class="writing-container">
    <div class="title-container"><input class="title" type="text" placeholder="Title" v-model="title">
      <multi-select class="select" v-on:clicked="log" />
    </div>
    <div class="writing">
      <editor v-model="editorText" height="80vh" class="editor" />
      <viewer :value="editorText" class="viewer"/>
    </div>
    <div class="button-container">
      <input type="button" class="button" value="저장" v-on:click="savePost">
    </div>
  </div>
</template>

<script>
import MultiSelect from '../components/MultiSelect.vue'
import 'tui-editor/dist/tui-editor.css'
import 'tui-editor/dist/tui-editor-contents.css'
import 'codemirror/lib/codemirror.css'
import 'highlight.js/styles/github.css'
import { Editor, Viewer } from '@toast-ui/vue-editor'
export default {
  name: 'writing',
  components: {
    'editor': Editor,
    'viewer': Viewer,
    MultiSelect
  },
  data () {
    return {
      editorText: '',
      title: '',
      value: ''
    }
  },
  methods: {
    savePost: function () {
      console.log(this.value)
      this.$http.post('/post', JSON.stringify({title: this.title, content: this.editorText, category: this.value}), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        console.log(result.data)
      }).catch(function (error) {
        console.log(error)
      })
    },
    log: function (value) {
      this.value = value
    }
  }
}
</script>

<style scoped>
.writing-container {
  display: flex;
  flex-direction: column;
}
.writing {
  display: flex;
  flex-direction: row;
  margin-top: 2%;
  margin-left: 2%;
}
.title-container {
  margin-left: 2%;
  display: flex;
  flex-direction: row;
}
.title {
  width: 70vw;
  border: none;
  border-bottom: 1px solid lightgrey;
  height: 4vh;
  margin-top: 1%;
  font-size: 15px;
}
.editor {
  width: 48vw;
  height: 50vh;
}
.viewer {
  width: 40vw;
  height: 80vh;
  margin-left: 2%;
  overflow: scroll;
}
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100vw;
}
.button {
  width: 5%;
  height: 30%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  color: #747272;
  font-size: 12px;
}
.button:hover {
  cursor: pointer;
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.16);
}
.select {
  align-self: center;
  margin-left: 2%;
}
</style>
