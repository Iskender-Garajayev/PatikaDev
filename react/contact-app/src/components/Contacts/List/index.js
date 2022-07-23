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
      <input className=" bg-none"
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setfilterText(e.target.value)}
      />
      {filtered.map((contacts, i) => (
        <li key={i}>
          <span>{contacts.fullname}</span>
          <span>{contacts.phone_number}</span>
        </li>
      ))}
    </div>
  );
}

export default List;
