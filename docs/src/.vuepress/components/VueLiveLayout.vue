<template functional>
  <div class="preview-code">
    <h2 id="preview">Preview</h2>

    <div class="preview-code-container">
      <div :class="`language-${props.lang} editor block`">
        <slot name="editor"></slot>
      </div>

      <div class="preview block">
        <slot name="preview"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import 'prismjs/themes/prism-tomorrow.css';
import 'vue-prism-editor/dist/prismeditor.min.css';

export default {
  data() {
    return {
      showEditor: false
    };
  }
};
</script>

<style lang="scss">
.preview-code {
  .preview {
    margin: 16px 0;
    padding: 15px;
    box-sizing: border-box;
  }

  .prism-editor__container {
    color: #fff;
    border-radius: 6px;
  }

  .prism-editor-wrapper .prism-editor__textarea,
  .prism-editor-wrapper .prism-editor__editor {
    padding: 10px;
  }

  @media screen and (min-width: 1300px) {
    .preview {
      margin: 0;
    }

    .preview,
    .editor {
      width: 50%;
    }

    &-container {
      display: flex;
    }
  }
}
</style>
