import mongoose from 'mongoose'

const audioSchema = new mongoose.Schema({
  audioUrl: { type: String },
  transcription: { type: String },
  createdAt: { type: String },
})

const audio = mongoose.model('audio', audioSchema)
export default audio
