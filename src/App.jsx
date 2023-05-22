import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Fuse from 'fuse.js';

import data from '../questions.json';
import SearchBar from './components/SearchBar';
import Navbar from './components/NavBar';

const options = {
  includeScore: true,
  keys: ['question', 'answer']
}

const fuse = new Fuse(data, options);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <SearchBar />
    </>
  )
}

export default App
