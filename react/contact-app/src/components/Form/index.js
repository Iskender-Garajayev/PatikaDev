import React from "react";
import { useState } from "react";

function Form({addContacts, contacts}) {

  const [form, setForm] = useState({fullname: "", phone_number: ""})

  const onChangeInput = (e) =>{
    setForm({...form, [e.target.name]: e.target.value })
  }

  const onSubmit=(e)=>{
    e.preventDefault()

    if (form.fullname === "" || form.phone_number === "") {
      return false
    }
    addContacts([...contacts, form])
    setForm({fullname: '' , phone_number: ''})
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name="fullname" placeholder="Full Name" value={form.fullname} onChange={onChangeInput} />
      </div>

      <div>
        <input className=" opacity-20 w-48 h-8 mt-1 rounded-md" name="phone_number" placeholder="  Phone Number" value={form.phone_number} onChange={onChangeInput}  />
      </div>

      <div>
        <button className=" bg-orange-500 w-20 h-8 mt-1 ml-9 rounded-md">ADD</button>
      </div>
    </form>
  );
}

export default Form;
