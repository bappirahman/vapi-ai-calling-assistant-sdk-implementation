import Vapi from "@vapi-ai/web";
import { assistant, apiKey } from "../env.js";


document.addEventListener("DOMContentLoaded", () => {
  const vapi = new Vapi(apiKey);
  function callVapi() {
    console.log('Called vapi');
    vapi.start(assistant);
    vapi.send({
      type: "add-message",
      message: {
        role: "system",
        content: "The user has pressed the button, say peanuts",
      },
    });
  }

  function endVapi() {
    console.log("called endVapi");
    vapi.stop();
  }

  const button = document.getElementById("vapiButton");
  let colorState = 0;
  let called = false;
  button.addEventListener("click", () => {
    if (called) {
      endVapi();
      called = false;
    } else {
      callVapi();
      called = true;
    }
    colorState = (colorState + 1) % 2;
    button.className = ""; // Reset all classes
    if (colorState === 1) {
      button.classList.add("red");
    } else if (colorState === 2) {
      button.classList.add("blue");
    }

    // No class means blue state (default state)
  });
});

// Attach callVapi to the window object so it's accessible in the HTML
// window.callVapi = callVapi;
