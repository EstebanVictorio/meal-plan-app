const path = require("path")
const alias = require("./aliases")

const plugins = [
    [
        require.resolve("babel-plugin-module-resolver"),
        {
            root: [path.resolve("./component"), path.resolve("./theme")],
            alias
        }
    ],
    [
        require.resolve("babel-plugin-styled-components"),
        {
            ssr: true,
            displayName: true,
            preprocess: false
        }
    ],
    [require.resolve("babel-plugin-transform-flow-strip-types")]
]

const presets = ["next/babel"]

module.exports = {
    presets,
    plugins
}
