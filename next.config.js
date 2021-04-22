const withFonts = require('next-fonts');
const withI18n = require('next-translate')

const SERVER_VARS = []
const PUBLIC_VARS = [
  "API_HOST",
  "API_SYMFONY_HOST",
  "APP_API_HOST_PUSHER",
  "API_TOKEN"
]

const env =  {
  serverRuntimeConfig: copyValues(SERVER_VARS),
  publicRuntimeConfig: copyValues(PUBLIC_VARS),
}
console.log("Loaded Config to Server");
console.log(env);
module.exports = withI18n((withFonts(({
  cssModules: true,
  ...env,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
}))))


function copyValues(items){
  return {
    ...items.reduce((acc,elem)=>{
      acc[elem] = process.env[elem]
      return acc
    },[])
  }
}
