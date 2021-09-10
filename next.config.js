const withImages = require("next-images");
const serverURL = process.env.NEXT_PUBLIC_BACKEND_URL;

module.exports = withImages({
  webpack(config, options) {
    return config;
  },
  images: {
    domains: ["localhost", "penerbitdapurkata.herokuapp.com"],
  },
});
