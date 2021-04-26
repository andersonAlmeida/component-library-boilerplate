const path = require('path');

module.exports = {
  componentsRoot: 'src/lib-components', // the folder where CLI will start searching for components.
  components: '**/[A-Z]*.vue', // the glob to define what files should be documented as components (relative to componentRoot)
  outDir: 'docs/src/components', // folder to save components docs in (relative to the current working directry)
  getDestFile: (file, config) => {
    // remove o nome da pasta em que está o componente
    return path.join(
      config.outDir,
      file.replace(/\/[a-zA-Z]{1,}\//gim, '/').replace(/\.vue$/, '.md')
    );
  }
};
