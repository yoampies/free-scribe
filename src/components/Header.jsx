import React from 'react'

export default function Header() {
  return (
    <header className='flex items-center justify-between gap-4 p-4'>
        <a href="/">
          <h1 className='font-medium'>Free<span className='text-blue-400 bold'>Scribe</span></h1>
        </a>
        <a href="/" className='flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-blue-400 special-button'>
            <p>New</p>
            <i className="fa-solid fa-plus"></i>
        </a>
    </header>
  )
}
