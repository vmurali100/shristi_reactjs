import React from "react";

export default function Userdetails(props) {
  return (
    <div>
      <p>{props.fname}</p>
      <p>{props.lname}</p>
      <button
        onClick={() => {
          props.deleteUser(props.index);
        }}
      >
        Delete
      </button>
      <hr />
    </div>
  );
}
