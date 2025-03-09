import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let myObj ={
    username:"Sandeep",
    age:21
  }
  let newArr=[1,2,3,4,5]
  return (
    <>
      <h1 className="bg-amber-400 rounded-xl  p-4 mb-4">Tailwind test</h1>
      {/* <Card channel="Chai" someObj={myObj} someArr={newArr}/> */}
      <Card username="Sandeep" ptext="I am learning Props"/>
    </>
  );
}

export default App
