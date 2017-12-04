
//register babel to transpile before test run
require('babel-register')();

//disable webpack features that Mocha doesnt understand
require.extensions['.css'] = function(){};
