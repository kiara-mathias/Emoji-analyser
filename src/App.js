import React, { useState } from "react";
import "./styles.css";
var color = "orange";
var emojiDictionary = {
  "😳": "disbelief",
  "🫠": "overwhelmed",
  "🙃": "sarcasm",
  "💀": "dying from extreme laughter",
  "🤩": "start-struck",
  "🍡": "Dango",
  "🍥": "fish cake",
  "🤪": "silly"
};
var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function clickChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "oops we dont have this in our database try again ";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <header className="header">
        {/* {" "} */}
        <h1>KNOW YOUR EMOJIS</h1>
      </header>

      <input onChange={clickChangeHandler} placeholder="enter an emoji" />
      <h2 style={{ color }}>{meaning}</h2>
      <h3>Emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{
              cursor: "pointer",
              padding: "1rem",
              fontSize: "2rem"
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
