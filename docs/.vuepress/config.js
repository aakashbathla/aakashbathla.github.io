const path = require("path");
module.exports = {
  title: "Bathla Blogs",
  description:
    "You can see all of the tech blogs, 9th class notes, 10th class notes, 11th class notes, 12th class notes, and many more.",
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: (config, isServer) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "../../", "src");
    config.resolve.alias["docs"] = path.resolve(__dirname, "..");
  },
};
