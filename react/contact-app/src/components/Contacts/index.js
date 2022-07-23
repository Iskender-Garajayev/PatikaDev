import {useState, useEffect} from 'react'
import List from './List'
import Form from '../Form'
import"./style.css";

function Contacts() {

  const [ contacts, setContacts] = useState([
    {
      fullname: 'Ahmet',
      phone_number: '9054683'
    },
    {
      fullname: 'Mehmet',
      phone_number: '907856'
    },
    {
      fullname: 'Mustafa',
      phone_number: '906576'
    }
  ])

  useEffect(()=>{
    console.log(contacts)
  },[contacts])

  return (
    <div className=' block' >
      <div className=' m-auto'>
        <List contacts={contacts}/>
      </div>
      <div className='form'>
        <Form addContacts={setContacts} contacts={contacts}/>
      </div>
    </div>
  )
}

export default Contacts