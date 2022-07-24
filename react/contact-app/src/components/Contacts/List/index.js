import React from "react";
import { useState } from "react";

function List({ contacts }) {
  const [filterText, setfilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLocaleLowerCase())
      );
  });
  return (
    <div>
      <input className=" w-56 h-8 mt-1 rounded-md"
        placeholder="  Filter Contact"
        value={filterText}
        onChange={(e) => setfilterText(e.target.value)}
      />
      {filtered.map((contacts, i) => (
        <li className=" flex justify-between w-56 mt-1 rounded-md h-7  bg-blue-200" key={i}>
          <span >{contacts.fullname}</span>
          <span >{contacts.phone_number}</span>
        </li>
      ))}
    </div>
  );
}

export default List;
