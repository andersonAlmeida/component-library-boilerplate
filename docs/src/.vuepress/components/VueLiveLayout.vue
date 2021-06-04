<template>
  <div class="my-vuelive">
    <button class="showEditor" type="button" @click="showEditor = !showEditor">
      Show editor
    </button>

    <div v-show="showEditor" class="my-vuelive-editor">
      <slot name="editor"></slot>
    </div>

    <div class="my-vuelive-preview">
      <slot name="preview"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showEditor: false
    };
  }
};
</script>

<style lang="scss">
.my-vuelive {
  textarea {
    width: 100%;
    min-height: 100px;
    padding: 10px;
    margin: 0;
    box-sizing: border-box;
    background-color: #f7f7f7;
  }

  .my-vuelive-editor {
    margin: 16px 0 0;
    color: #fff;
  }

  .my-vuelive-preview {
    margin: 0;
  }
}
</style>
