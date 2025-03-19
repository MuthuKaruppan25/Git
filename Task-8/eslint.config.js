export default [
    {
      files: ["**/*.js"],
      languageOptions: {
        ecmaVersion: "latest"
      },
      rules: {
        semi: ["error", "always"],
        "no-unused-vars": "warn",
        "no-console": "off"
      }
    }
  ];
  