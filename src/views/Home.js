import React from 'react'
import HelloWorld from '../components/HelloWorld'

function Home() {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">This is the home page</h1>

      <HelloWorld name="Sammy"></HelloWorld>
    </div>
  )
}

export default Home