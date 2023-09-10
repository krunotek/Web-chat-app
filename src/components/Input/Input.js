import React, { useState } from "react";

function Input(props) {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setText("");
    props.onSendMessage(text);
  }

  return (
    <div className="input">
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={text}
          type="text"
          placeholder="Upišite poruku i pritisnite ENTER"
          autoFocus
        />
        <button>Šalji</button>
      </form>
    </div>
  );
}

export default Input;
