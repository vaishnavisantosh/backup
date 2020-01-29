'use strict';

var _nodeSchedule = require('node-schedule');

var task = (0, _nodeSchedule.scheduleJob)({ second: 30 }, function () {
  console.log('will execute after 1 min');
});