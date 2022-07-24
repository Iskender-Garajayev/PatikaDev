import React, { useEffect } from 'react'

function Users() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .than((res) => res.json())
    .than((users) => console.log(users))
  }, [])
  return (
    <div>Users</div>
  )
}

export default Users