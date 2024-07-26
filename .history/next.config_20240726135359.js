module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/static",
  },
  env:{
    MONGO_URL: process.env.MONGO_URL
  }
};
