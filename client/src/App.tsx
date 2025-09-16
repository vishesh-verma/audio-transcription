import { use, useState, type ChangeEvent, type SetStateAction } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import { GET_TRANSCRIPTION } from './api'

function App() {
  // const [count, setCount] = useState(0)
  const [audioUrl ,setAudioUrl] = useState<any>("")
  const [transcription, setTranscription] = useState("")
  
  // const handleChange=(item: ChangeEvent<HTMLInputElement>)=>{
  //   setAudioUrl(item)
  // }

  const sentTranscription = async()=>{
    try{
      const response = await axios.post(GET_TRANSCRIPTION, {audioUrl: audioUrl})
      setTranscription(response.data)
    }
    catch(error){
      console.info(error)
    }
  }
  return (
    <>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h2>simple react app to upload the audio file and get the transcriptions</h2>
      <div className="card">
        <input type='text' className='input' value={audioUrl} onChange={(e: ChangeEvent<HTMLInputElement>) => setAudioUrl(e.target.value)} placeholder='enter audio url..'></input>
       
        <p>
          {transcription && transcription}
        </p>
      </div>
      <button disabled={audioUrl.length === 0} onClick={sentTranscription}>
         save transcription
        </button>
    </>
  )
}

export default App
