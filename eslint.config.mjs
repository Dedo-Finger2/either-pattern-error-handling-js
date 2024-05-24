import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: { 
      globals: { 
        ...globals.browser, 
        ...globals.node
      }
    },
    rules: {
      semi: "error",
      "no-constructor-return": "error",
      "no-dupe-class-members": "error",
      "no-dupe-else-if": "error",
      "no-duplicate-imports": "error",
      "no-setter-return": "error",
      "no-unused-private-class-members": "error",
      camelcase: "error",
      "default-case": "error",
      eqeqeq: "error",
      "no-var": "error",
    },
  },
  pluginJs.configs.recommended,
];