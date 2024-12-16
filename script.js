let numButtonClicks = 0;


function buttonClicked() {
  numButtonClicks = numButtonClicks + 1;
  document.getElementById("mainDiv").textContent = "Button Clicked times: " + numButtonClicks;

  navigator.clipboard
    .readText()
    .then((text) => {
      document.getElementById("d1").textContent = text;
      console.log("Pasted content: ", text);
    })
    .catch((err) => {
      console.error("Failed to read clipboard contents: ", err);
    });
}
