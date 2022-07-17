import {useState, useEffect} from 'react'

function App() {
  const [number, setNumber ] = useState (0)
  useEffect(()=>{
    console.log("State Updated")
  })
  return (
    <div className="App">
      <h2>{number}</h2>
      <button onClick={()=> setNumber(number + 1)} >Click</button>
    </div>
  );
}

export default App;
