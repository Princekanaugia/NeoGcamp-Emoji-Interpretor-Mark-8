import React, { useState } from "react";
import "./styles.css";

var emojiDictionary /*more like emojiObject */ = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "😂": "Face with Tears of Joy",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "😍": "Smiling Face with Heart-Eyes",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "😝": "Squinting Face with Tongue",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "😬": "Grimacing Face",
  "😮‍💨": "Face Exhaling",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "😵": "Face with Crossed-Out Eyes",
  "😵‍💫": "Face with Spiral Eyes",
  "😎": "Smiling Face with Sunglasses",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "😮": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😲": "Astonished Face",
  "😳": "Flushed Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face",
  "😫": "Tired Face",
  "😤": "Face with Steam From Nose",
  "😡": "Enraged Face",
  "😠": "Angry Face"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  // useState return an array of 2 value.
  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (
      userInput in emojiDictionary ||
      userInput === "" /*object key in object*/
    ) {
      setMeaning(meaning);
    } else {
      setMeaning("not found");
    }
    // this process data to print in GUI
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <input
        onChange={inputChangeHandler}
        placeholder="Put your Emoji here..."
        style={{ margin: "1rem" }}
      />
      <div style={{ fontSize: "1.2rem" }}>
        Search your emoji above or Click on emoji below to know its meaning.
      </div>
      <div id="meaning">Emoji Meaning : {meaning} </div>
      <h3> Emoji we know </h3>
      <main>
        {emojiWeKnow.map(function (emoji) {
          return (
            <span
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "1.2rem",
                padding: "1rem",
                cursor: "pointer",
                display: "inline"
              }}
            >
              {emoji}
            </span>
          );
        })}
      </main>
      <footer id="footer">
        <h3>
          <b>About Emoji Interpretor</b>
        </h3>
        <div id="footer-heading">
          <b>Emoji Interpretor</b> app searches your emoji from our emoji
          directory object. it is build useing Reactjs on codesandbox.
          Conditional in JSX, useState() are React concept used in making this
          app.
        </div>
      </footer>
    </div>
  );
}
