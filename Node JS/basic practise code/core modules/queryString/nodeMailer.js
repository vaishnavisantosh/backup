import { createTransport } from 'nodemailer'

const trasporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'vaishnavi.jawanjal@cuelogic.com',
    pass: 'vaish@cuelogic'
  }
})

const mailOption = {
  from: 'vaishnavi.jawanjal@cuelogic.com',
  to: 'madhvi.kokil@cuelogic.com',
  subject: 'Demo mail from node program',
  text: 'Hi Madhvi!!!!!!'

}

trasporter.sendMail(mailOption, (err, info) => {
  if (err) {
    console.log('err', err)
  } else {
    console.log('response', info)
  }
})
