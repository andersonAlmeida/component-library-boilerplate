<script>
import Vue from "vue";
import HelloWorld from "../src/lib-components/templates/HelloWorld/HelloWorld.vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { DsLibrarySample } from '@/entry.esm';

export default Vue.extend({
  components: { HelloWorld },
  name: "ServeDev"
  // components: {
  //  DsLibrarySample,
  // }
});
</script>

<template>
  <div id="app">
    <ds-library-sample />
    <Button />
    <MyPattern />
    <HelloWorld />
  </div>
</template>
