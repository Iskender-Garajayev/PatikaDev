import React from 'react'

function List({contacts}) {
  return (
    <div>
      {contacts.map((contacts, i) => 
      <li key={i}>{contacts.fullname}</li>,
      <li>{contacts.phone_number}</li>

      )}
    </div>
  )
}

export default List