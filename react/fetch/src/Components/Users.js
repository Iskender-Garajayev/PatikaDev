import React, { useEffect, useState } from "react";

function Users() {


  const [user, setUser] = useState([]);

  useEffect(() => {

      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUser(json));
      }, 4000);
  }, []);

  return <div>
      <h1>user</h1>
      {
        user.map((user)=> <div key={user.id}>{user.name}</div>)
      }
  </div>;
}

export default Users;
