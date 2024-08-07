import React from 'react'

export default function FileDisplay(props) {
    const {handleAudioReset, file, audioStream} = props

  return (
    <main className='flex-1 p-4 flex flex-col gap-3 text-center pb-20 sm:gap-4 justify-center max-w-full mx-auto w-72 sm:w-96'>
        <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>
            Your <span className='text-blue-400 bold'>file</span>
        </h1>
        <div className='flex flex-col text-left my-4'>
            <h3 className='font-semibold'>Name</h3>
            <p>{file ? file?.name : 'Custom audio'}</p>
        </div>
        <div className='flex items-center justify-between gap-4'>
            <button onClick={handleAudioReset} className='text-slate-400 hover:text-blue-600 duration-200'>Reset</button>
            <button className='special-button px-3 py-2 rounded-lg text-blue-400 flex items-center gap-2 font-medium'>
                <p>Transcribe</p>
                <i className='fa-solid fa-pen-to-square'></i>
            </button>
        </div>
    </main>
  )
}
