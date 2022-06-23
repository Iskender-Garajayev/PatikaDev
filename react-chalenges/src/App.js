import {useState} from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('Mehmet')
  const [age, setAge] = useState(31)
  const [friends, setFriends] = useState(["Ahmet","Murat"])
  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>My Years Old Is: {age}</h2>
      <button onClick={() => setName("Ahmet")}>Change name</button>
      <button onClick={() => setAge(18)}>Change age </button>

      <hr />
      <h2>Friebds</h2>
      {friends.map((friends, index)=> (<div key={index}>{friends}</div>))}
      <br />
      <button onClick={() => setFriends([...friends,"Ayse"])}>Change age </button>

    </div>
    
  );
}

export default App;
