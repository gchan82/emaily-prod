// keys.js dev or prod?
if (process.env.NODE_ENV === 'production') {
  //if we are in prod - rtn the prod set of keys
  module.exports = require('./prod');
} else {
  //if we are in dev - rtn dev keys!!!
  module.exports = require('./dev');
}

