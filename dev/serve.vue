<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { DsLibrarySample } from '@/entry.esm';

export default Vue.extend({
  name: "ServeDev"
  // components: {
  //  DsLibrarySample,
  // }
});
</script>

<template>
  <div id="app">
    <DsLibrarySample />
    <Button>Teste</Button>
    <MyPattern />
    <HelloWorld />
  </div>
</template>
