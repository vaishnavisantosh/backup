'use strict'

var _nodemailer = require('nodemailer')
var trasporter = (0, _nodemailer.createTransport)({
  service: 'gmail',
  auth: {
    user: 'vaishnavi.jawanjal@cuelogic.com',
    pass: 'vaish@cuelogic'
  }
})

var mailOption = {
  from: 'vaishnavi.jawanjal@cuelogic.com',
  to: 'madhvi.kokil@cuelogic.com',
  subject: 'Demo mail from node program',
  text: 'Hi Madhvi!!!!!!'

}

trasporter.sendMail(mailOption, function (err, info) {
  if (err) {
    console.log('err', err)
  } else {
    console.log('response', info)
  }
})
