module.exports = {
    presets: [
        "@babel/preset-env", //Will allow my code to convert modern JS code to old JS code
        "@babel/preset-react", //Will add React functionalities to the JS code converted.
    ],
    plugins: ["@babel/plugin-transform-runtime"],
};
