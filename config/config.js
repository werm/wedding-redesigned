var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'cn'
    },
    port: 3000,
    db: 'mongodb://localhost/cn-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'cn'
    },
    port: 3000,
    db: 'mongodb://localhost/cn-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'cn'
    },
    port: 3000,
    db: 'mongodb://localhost/cn-production'
  }
};

module.exports = config[env];
