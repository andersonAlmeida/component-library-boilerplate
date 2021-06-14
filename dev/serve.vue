<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { DsLibrarySample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev'
  // components: {
  //  DsLibrarySample,
  // }
});
</script>

<template>
  <div id="app">
    <IconSprite />
    <DsLibrarySample />
    <Button>Teste</Button>
    <MyPattern />
    <HelloWorld />
    <Icon icon="spotify" />
    <Icon icon="facebook2" />
  </div>
</template>
