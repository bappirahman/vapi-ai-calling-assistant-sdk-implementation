import "./styles.css";
import Vapi from "@vapi-ai/web";

const apiKey = process.env.VAPI_API_KEY;

function initializeAgent(buttonId, assistantId) {
  const vapi = new Vapi(apiKey);
  const button = document.getElementById(buttonId);
  let colorState = 0;
  let called = false;

  function callVapi() {
    console.log(`Called ${buttonId}`);
    vapi.start(assistantId);
    vapi.send({
      type: "add-message",
      message: {
        role: "system",
        content: `The user has pressed the ${buttonId}, say peanuts`,
      },
    });
  }

  function endVapi() {
    console.log(`Called end${buttonId}`);
    vapi.stop();
  }

  button.addEventListener("click", () => {
    if (called) {
      endVapi();
      called = false;
    } else {
      callVapi();
      called = true;
    }
    colorState = (colorState + 1) % 2;
    button.className = "vapiButton"; // Reset all classes
    if (colorState === 1) {
      button.classList.add("red");
    } else {
      button.classList.add("blue");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeAgent("vapiButton1", process.env.VAPI_ASSISTANT_ID1);
  initializeAgent("vapiButton2", process.env.VAPI_ASSISTANT_ID2);

  // Add more agents as needed
  // initializeAgent("vapiButton3", process.env.VAPI_ASSISTANT_ID3);
});
