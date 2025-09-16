import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const mongo_url: string = process.env.MONGO_URL || ''

export default async function mongooseConnection() {
  await mongoose.connect(mongo_url)
  console.info('mongoose connection completed')
}
