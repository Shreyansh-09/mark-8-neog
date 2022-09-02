import "./styles.css";
import React, { useState } from "react";

var emojiDict = {
  "😄": "Grinning Face with Smiling Eyes",
  "🤫": "Shushing Face",
  "😒": "Unamused Face",
  "😔": "Pensive Face",
  "🥳": "Partying Face",
  "😟": "Worried Face",
  "💓": "Beating Heart",
  "🥰": "Smiling Face with Hearts",
  "🤗": "Smiling Face with Open Hands",
  "😐": "Neutral Face"
};

var emojiList = Object.keys(emojiDict);

export default function App() {
  var [userInput, setuserInput] = useState("");

  function inputchangeHandler(event) {
    var emoji = event.target.value;
    var meaning = emojiDict[emoji];
    if (meaning === undefined) {
      meaning = "We don't have this emoji in our database.";
    }
    setuserInput(meaning);
  }
  function emojiclickHandler(emoji) {
    var value = emojiDict[emoji];
    setuserInput(value);
  }
  return (
    <div className="App">
      <h1>llnside outt</h1>
      <div>
        <input onChange={inputchangeHandler}></input>
      </div>
      <h2> {userInput} </h2>
      <h3>Emoji's we have</h3>
      {emojiList.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclickHandler(emoji)}
            style={{ padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
