import marko from "./marko.js";
import meanSplit from "./segmenter.js"

const startButton = document.getElementById("startButton");
const display = document.getElementById("display");

const recognition = new webkitSpeechRecognition();
recognition.lang = "ja-JP";
recognition.onresult = (event) => {
    const text = event.results[event.results.length-1][0].transcript;
    const yourText = `${text.replaceAll(" ", "")}。`;
    const segments = meanSplit(yourText);
    marko.add(segments);
    const roboText = marko.generate();

    const yourP = document.createElement("p");
    const text1 = document.createTextNode(`キミ: ${yourText}`);
    yourP.appendChild(text1);
    const roboP = document.createElement("p");
    const text2 = document.createTextNode(`ロボ: ${roboText}`);
    roboP.appendChild(text2);
    display.prepend(yourP);
    display.prepend(roboP);

    const uttr = new SpeechSynthesisUtterance(roboText);
    speechSynthesis.speak(uttr);
}

startButton.onclick = () => recognition.start();
recognition.onstart = () => startButton.disabled = true;
recognition.onend = () => startButton.disabled = false;