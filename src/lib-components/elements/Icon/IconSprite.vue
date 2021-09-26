<template>
  <svg width="0" height="0" style="display: none" v-html="sprite" />
</template>

<script>
import { svgIcons } from '@/assets/icons/svg/icons';

export default {
  name: 'IconSprite',
  data() {
    return {
      sprite: ''
    };
  },
  created() {
    let symbols = [];
    symbols = svgIcons().map(async (path) => {
      const id = path.substring(path.lastIndexOf('/') + 1).split('.')[0];

      let svg = '';

      await fetch(path)
        .then((response) => response.text())
        .then((response) => {
          debugger;
          svg = response
            .replace(/\n/gim, '')
            .replace(/(width|height)="\d+"/gim, '')
            .replace(/(viewbox)="([\d+]\s?){1,4}"/gim, '')
            .replace('<svg', `<symbol id="${id}"`)
            .replace('svg>', 'symbol>');
        })
        .catch((error) => {
          console.error(error);
        });

      return svg;
    });

    Promise.all(symbols).then((response) => {
      this.sprite = response.join('\n');
    });
  }
};
</script>
