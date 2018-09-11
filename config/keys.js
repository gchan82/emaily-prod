// keys.js dev or prod?
if (process.env.NODE_ENV === 'production') {
  //we are in prod - rtn the prod set of keys
  module.exports = require('./prod');
} else {
  //we are in dev - rtn dev keys!!!
  module.exports = require('./dev');
}

module.exports = {
  googleClientID: '526206735091-in3vp134trqi1m58hvuqeh8jl4q1i2gn.apps.googleusercontent.com',
  googleClientSecret: 'vRLPQNQYYvxC70PYokxloyqB',
  mongoURI: 'mongodb://gary:pass123@ds147942.mlab.com:47942/emaily-dev',
  cookieKey: 'cookiekeyrandomletterssdgiaohapdhnalkaysgiandjolghlkdfhagi'
};