import { useState, useEffect  } from 'react' 
import HomePage from './components/HomePage'
import Header from './components/Header'
import FileDisplay from './components/FileDisplay'

function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)

  const isAudioAvailable = file || audioStream

  function handleAudioReset () {
    setFile(null)
    setAudioStream(null)
  }

  useEffect(() => {
    console.log(audioStream)
  }, [audioStream])

  //3:50:08

  return (
    <>
      <div className='flex flex-col px-4'>
        <section className='min-h-screen flex flex-col'>
          <Header />
          {isAudioAvailable ? (<FileDisplay file={file} audioStream={audioStream} handleAudioReset={handleAudioReset}/>) : (<HomePage setFile={setFile} setAudioStream={setAudioStream}/>)}
        </section>  
      </div>
    </>
  )
}

export default  App
