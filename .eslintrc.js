module.exports = {
  root: true,
  env: { node: true },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/prettier"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    ToIndexable: "readonly",
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly"
  },
  rules: {
    "no-unused-vars": 0,
    "no-case-declarations": 0,
    "vue/no-v-html": 0,
    "no-empty": 0,
    "no-global-assign": 0,
    "no-constant-condition": 0,
    "no-debugger": 0,
    "no-irregular-whitespace": 0,
    "vue/multi-word-component-names": 0
  }
};
