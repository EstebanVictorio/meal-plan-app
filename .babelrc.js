const path = require("path")
const alias = require("./aliases")

const plugins = [
    [
        require.resolve("babel-plugin-module-resolver"),
        {
            root: [path.resolve("./component"), path.resolve("./theme")],
            alias
        }
    ]
]

const presets = ["next/babel"]

module.exports = {
    presets,
    plugins
}
