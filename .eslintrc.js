module.exports = {
    "extends": ["standard"],
    "parser": "babel-eslint",
    "plugins": ["import","mocha","json"],
    "rules": {
        "no-var": 2,
        "import/no-commonjs": 2
    },
    "env":{"mocha":true}
};
