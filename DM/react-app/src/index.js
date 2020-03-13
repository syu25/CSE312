import React from 'react';
import ReactDOM from 'react-dom';
// Create a React element assign a name, any attributes
// and a child element like the text Hello World
var hW1 = React.createElement('h1', {style:{color: "red"}}, 'Stop in the same of the lord!')
var hW2 = React.createElement('h1', {style:{color: "pink"}}, 'What a Man ;)')
var hW3 = React.createElement(
          "button",
          {
            className: "panel-btn-close hide-btn",style:{color: "purple"}
          },
          "Nothing"
        )

// You can add child elements to another element
var div1 = React.createElement('div', null, hW3, hW2, hW1);
var div2 = React.createElement('div', null, hW3);
var div3 = React.createElement('div', null, div1, div2);

// Render element in the browser
// You can only render 1 element at a time
ReactDOM.render(
  <html>
  <h2><strong>Direct Message user_name</strong></h2>
  <h3><strong>Chat History:</strong></h3>
  <textarea id="Chat-History" rows="30" cols="39" wrap='soft'>No chat History... Be the first to send user_name a message!!!</textarea>
  <br></br>
  <textarea id="Send-Message" rows="3" cols="39" wrap='soft'>Whats Up?</textarea>
  <br></br>
  <button type="button">Send</button><button type="button">Add Media</button><button type="button">Clear Chat History</button><button type="button">Back</button>
  </html>,
  document.getElementById('app')
)
