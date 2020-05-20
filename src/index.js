//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const hour = new Date().getHours();

var customClass = {
  color: ""
};
var heading = "";

if (hour >= 0 && hour < 12) {
  customClass.color = "red";
  heading = "Good Morning";
} else if (hour >= 12 && hour < 18) {
  customClass.color = "green";
  heading = "Good Afternoon";
} else if (hour >= 18 && hour <= 23) {
  customClass.color = "blue";
  heading = "Good Evening";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customClass}>
      {" "}
      {heading}{" "}
    </h1>
  </div>,
  document.getElementById("root")
);
