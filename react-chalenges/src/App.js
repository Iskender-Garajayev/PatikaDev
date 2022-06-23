import {useState} from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('Mehmet')
  const [age, setAge] = useState(31)
  const [friends, setFriends] = useState(["Ahmet","Murat"])
  const [address, setAddress] = useState ({title: 'Bursa', zipcode:21640})
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


      <hr />
      <br />
      <h2>Address</h2>
      <div>{address.title} {address.zipcode}</div>

      <br />
      {/* onceki veriyi korumak adina ...ADDRESS  Eklenildi*/}
      <button onClick={()=> setAddress({...address, title:'Gorukle' })} >Change Address</button>
      {/* <button onClick={()=> setAddress({title:'Gorukle', zipcode: 33333 })} >Change Address</button> */}



    </div>
    
  );
}

export default App;
