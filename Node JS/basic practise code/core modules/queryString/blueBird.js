import { promisify } from 'bluebird'
import { readFile } from 'fs'

const readContext = promisify(readFile)
readContext('content.txt', 'UTF-8')
  .then((data) => {
    console.log(`Data: ${data}`)
  })
  .catch((Error) => {
    console.log(`Error: ${Error}`)
  })
