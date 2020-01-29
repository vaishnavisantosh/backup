import { scheduleJob } from 'node-schedule'

scheduleJob({ second: 30 }, () => { console.log('will execute after 1 min') })
