import './styles.css';
import Vapi from "@vapi-ai/web";
import { assistant1, assistant2, apiKey } from "../env.js";
// import "dotenv/config";




// const apiKey=process.env.VAPI_API_KEY
// const assistant = process.env.VAPI_ASSISTANT_ID

document.addEventListener("DOMContentLoaded", () => {
  const vapi1 = new Vapi(apiKey);
  const vapi2 = new Vapi(apiKey);
  function callVapi1() {
    console.log("Called vapi1");
    vapi1.start(assistant1);
    vapi1.send({
      type: "add-message",
      message: {
        role: "system",
        content: "The user has pressed the button1, say peanuts",
      },
    });
  }
  function callVapi2() {
    console.log("Called vapi2");
    vapi2.start(assistant2);
    vapi2.send({
      type: "add-message",
      message: {
        role: "system",
        content: "The user has pressed the button1, say peanuts",
      },
    });
  }

  function endVapi1() {
    console.log("called endVapi1");
    vapi1.stop();
  }
  function endVapi2() {
    console.log("called endVapi2");
    vapi2.stop();
  }

  // Button 1
  const button1 = document.getElementById("vapiButton1");
  let colorState1 = 0;
  let called1 = false;
  button1.addEventListener("click", () => {
    if (called1) {
      endVapi1();
      called1 = false;
    } else {
      callVapi1();
      called1 = true;
    }
    colorState1 = (colorState1 + 1) % 2;
    button1.className = ""; // Reset all classes
    if (colorState1 === 1) {
      button1.classList.add("red");
    } else if (colorState1 === 2) {
      button1.classList.add("blue");
    }

    // No class means blue state (default state)
  });

  // Button 2
  const button2 = document.getElementById("vapiButton2");
  let colorState2 = 0;
  let called2 = false;
  button2.addEventListener("click", () => {
    if (called2) {
      endVapi2();
      called2 = false;
    } else {
      callVapi2();
      called2 = true;
    }
    colorState2 = (colorState2 + 1) % 2;
    button2.className = ""; // Reset all classes
    if (colorState2 === 1) {
      button2.classList.add("red");
    } else if (colorState2 === 2) {
      button2.classList.add("blue");
    }

    // No class means blue state (default state)
  });
});

// Attach callVapi to the window object so it's accessible in the HTML
// window.callVapi = callVapi;
