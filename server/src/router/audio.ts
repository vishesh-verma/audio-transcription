import express from 'express'
import { createVoiceTranscription } from '../module/audio/controller'
export const audioRouter = express.Router()

audioRouter.post('', createVoiceTranscription)
