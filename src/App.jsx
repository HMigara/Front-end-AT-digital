import { useState } from 'react'
import './App.css'
import Fotter from './Components/Fotter/Fotter'
import Headder from './Components/Headder/Headder';
import Question from './Components/Question/Question';
import Content from './Components/content/Content';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headder/>
      <Content/>
      <Question/>
      <Fotter />
    </>
  );
}

export default App
