import { useMemo, useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import { Conclusion } from './components/Conclusion'
import { Footer } from './components/Footer'
import { About } from './components/About'

function App() {
  const [weight, setWeight] = useState(40)
  const [height, setHeight] = useState(130)

  // Handling weight event
  const WeightChange = (event) =>{
    const inputWeight = event.target.value
    setWeight(inputWeight)
  }


  // Handling height event
  const HeightChange = (event) => {
    const inputHeight = event.target.value
    setHeight(inputHeight)
  }
 
  const output = useMemo(() => {
    const HeightInMeters = height / 100
    return(weight / (HeightInMeters * HeightInMeters)).toFixed(1)
  }, [height, weight]);

  return (
  <Router>
    <div>
    <div className="container">
      <h2>BMI calculator</h2>
        <p className="weight">Weight: {weight} kg</p>
        <input 
        type="range" 
        step='1'
        min='40'
        max="250"
        onChange={WeightChange}
        className="weight-input" />
        <p className='height'>Height: {height} cm</p>
        <input 
        type='range'
        step='1'
        min='130'
        max='220'
        onChange={HeightChange}
        className="height-input" />
    </div>
      <div className="output">
        <p>BMI is</p>
        <p className='bmi'>{output}</p>
      </div>
      <Conclusion output={output}  />
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/'/>
    </Routes> 
      <Footer />
    </div>
  </Router> 
  )
}

export default App
