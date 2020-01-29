'use strict';

var _bluebird = require('bluebird');

var _fs = require('fs');

var readContext = (0, _bluebird.promisify)(_fs.readFile);

readContext('content.txt', 'UTF-8').then(function (data) {
    console.log('Data:  ' + data);
}).catch(function (Error) {
    console.log('Error : ' + Error);
});