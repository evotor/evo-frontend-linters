# `@evo/prettier-config`

1. Install as dev-dependency `npm i @evo/prettier-config --save-dev`
2. Create Prettier's config file `.prettierrc.js` at the project root
3. Use minimal configuration as follows:
   ```
   module.exports = require('@evo/prettier-config');
   ```

### Presets

- For Angular project you can use preset:
   ```
   module.exports = require('@evo/prettier-config/lib/presets/angular.js');
   ```
