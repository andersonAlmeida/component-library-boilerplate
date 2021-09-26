/**
 * It is using the vue-cli during development to inject scss variables and mixins globally
 */
module.exports = {
  devServer: {
    port: 8010
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/tokens";
          @import "@/assets/scss/functions";
        `
      }
    }
  }
};
