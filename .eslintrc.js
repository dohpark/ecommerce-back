module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:node/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    quotes: ["error", "double"], //더블 쿼터 사용
    "@typescript-eslint/quotes": ["error", "double"], //더블 쿼터 사용
    "no-unused-vars": "off", //사용안한 변수 경고 중복
    "spaced-comment": "off", //주석을 뒤에 쓰지 말라는 경고
    "@typescript-eslint/no-unused-vars": "warn", //사용안한 변수는 경고
    "comma-dangle": "off", // 마지막에 , 을 넣어주지 않는다.
    "arrow-body-style": "off", //화살표 함수 안에 return을 사용 할 수 있다.
    "react/no-unescaped-entities": "off", //문자열 내에서 " ' > } 허용
    "react/prop-types": "off", //proptypes를 사용하지 않는다.
    "object-curly-newline": "off", // { 다음 줄 바꿈을 강제로 사용하지 않는다.
    "implicit-arrow-linebreak": "off", // 화살표 함수 다음에 줄 바꿈을 사용할 수 있다.
    "no-shadow": "off", //파일 내에서 중복 이름을 사용 할 수 있다.
    "operator-linebreak": "off", //연산자 다음 줄 바꿈을 사용 할 수 있다.
    "global-require": "off", //함수 내에서 require 사용가능
    "no-use-before-define": "off", // 선언전에 사용하지 말라,
    "import/prefer-default-export": "off", //export default 권장
    "no-param-reassign": "off", //param assign 하지 않기
    "no-confusing-arrow": "off",
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ], // import export 사용가능하도록
    "no-undef": "off", // typescript has its own checks, may cause duplication so need to disable
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
      }, //import 시 확장자명은 사용하지 않는다.
    ],
  },
  settings: {
    node: {
      tryExtensions: [".js", ".json", ".node", ".ts", ".d.ts"],
    }, // eslint-plugin-node 사용시 에러방지
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".d.ts"],
      },
    }, // eslint-plugin-import를 통해 사용하는거임
  },
};
