const environment = {
  MONGOOSE_URL:
    "mongodb://test:test123@cluster0-shard-00-00.1cezz.mongodb.net:27017,cluster0-shard-00-01.1cezz.mongodb.net:27017,cluster0-shard-00-02.1cezz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-yvux9g-shard-0&authSource=admin&retryWrites=true&w=majority",
  ADMIN_TOKEN: "adminsecerest@key2login_secure",
  PROJECT_NAME: "abc",
  CMC_BASE_URL: "https://pro-api.coinmarketcap.com",
  CMC_API_KEY:"aa739a85-8a33-4567-8e5c-8f99f07559b7",
  PORT: "8080",
};

if (process.env.NODE_ENV === "development") {
  environment.MONGOOSE_URL =
    "mongodb://test:test123@cluster0-shard-00-00.1cezz.mongodb.net:27017,cluster0-shard-00-01.1cezz.mongodb.net:27017,cluster0-shard-00-02.1cezz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-yvux9g-shard-0&authSource=admin&retryWrites=true&w=majority";
  environment.ADMIN_TOKEN = "adminsecerest@key2login_secure";
}

if (process.env.NODE_ENV === "production") {
  environment.MONGOOSE_URL =
    "mongodb://test:test123@cluster0-shard-00-00.1cezz.mongodb.net:27017,cluster0-shard-00-01.1cezz.mongodb.net:27017,cluster0-shard-00-02.1cezz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-yvux9g-shard-0&authSource=admin&retryWrites=true&w=majority";
  environment.ADMIN_TOKEN = "adminsecerest@key2login_secure";
}

if (process.env.NODE_ENV === "staging") {
  environment.MONGOOSE_URL =
    "mongodb://test:test123@cluster0-shard-00-00.1cezz.mongodb.net:27017,cluster0-shard-00-01.1cezz.mongodb.net:27017,cluster0-shard-00-02.1cezz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-yvux9g-shard-0&authSource=admin&retryWrites=true&w=majority";
  environment.ADMIN_TOKEN = "adminsecerest@key2login_secure";
}

module.exports = {
  env: environment,
};
