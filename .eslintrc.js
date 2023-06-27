module.exports = {
    // env: {
    //     browser: true,
    //     es6: true,
    //     node: true
    // },
    // parser: "babel-eslint", // 解析器
    extends: [require.resolve('@umijs/fabric/dist/eslint')], // 扩展
    plugins: [], // 插件
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {
        'react/require-default-props': 0
    }
}