import app from './app'
import http from 'http'
import dotenv from 'dotenv'
import mongooseConnection from './config/mongodb.config'

dotenv.config()

const server = http.createServer(app)
const port: string = process.env.PORT || '8000'

async function startServer() {
  await mongooseConnection()
  server.listen(port, () => {
    console.info(`server litening to ${port}...`)
  })
}

startServer()
