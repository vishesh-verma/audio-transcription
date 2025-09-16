import { Request, Response } from 'express'
import audio from './model'

export async function createVoiceTranscription(
  req: Request,
  res: Response,
): Promise<void> {
  console.info('inside create function', req.body)
  const transcription = 'transcription of the audio file!!!' + Math.random()
  const url: string = req.body.audioUrl
  try {
    if (url) {
      const result = {
        audioUrl: url,
        transcription: transcription,
        createdAt: Date.now(),
      }
      const newAudio = new audio(result)
      console.log(newAudio)
      await newAudio.save()
      res.status(201).json(newAudio.transcription)
    }
  } catch (error) {
    console.info(error)
  }
}
