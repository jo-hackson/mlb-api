module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": ["airbnb", "prettier", "eslint:recommended"],
    "plugins": ["prettier"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2016,
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true
        }
  },
    "rules": {
        "indent": [
            2,
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "import/extensions": [
            "off", 
            "never"
        ],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};