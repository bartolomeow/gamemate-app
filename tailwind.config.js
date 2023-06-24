module.exports = {
    content: ["./components/**/*.{js,jsx}", "./screens/**/*.{js,jsx}"],
    theme: {
        extend: {
            maxWidth: {
                "3/4": "75%"
            }
        }
    },
    plugins: [],
    corePlugins: require("tailwind-rn/unsupported-core-plugins")
};
