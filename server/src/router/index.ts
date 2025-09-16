import express from 'express'
import { audioRouter } from './audio'
const router = express.Router()

router.use('/transcription', audioRouter)

export default router
