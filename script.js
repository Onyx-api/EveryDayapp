
function flipCoin() {
    const coinContainer = document.querySelector('.coin-container');
    const frontFace = document.getElementById('front-face');
    const backFace = document.getElementById('back-face');
    const resultDisplay = document.getElementById('result');

    // Randomly determine the winning side
    const randomSide = Math.floor(Math.random() * 2);

    // Hide both sides initially
    frontFace.style.display = "none";
    frontFace.style.transform = "rotateY(180deg)"; // rotate on the Y-axis
    backFace.style.display = "none";

    // Show the winning side
    if (randomSide === 0) {
        frontFace.style.display = "block";
        frontFace.style.transform = "rotateY(0deg)"; // rotate on the Y-axis
        resultDisplay.textContent = 'Heads!';
    } else {
        backFace.style.display = "block";
        resultDisplay.textContent = 'Tails!';
    }
}
function addName() {
    const newName = document.getElementById('newName').value;
    const nameList = document.getElementById('nameList');
    const newListItem = document.createElement('li');
    newListItem.textContent = newName;
    nameList.appendChild(newListItem);
}

function pickRandomName() {
  const nameList = document.getElementById('nameList');
  const names = nameList.getElementsByTagName('li');
  const randomIndex = Math.floor(Math.random() * names.length);
  const resultBox = document.createElement('div');
  resultBox.classList.add('result-box'); // Add class for styling
  resultBox.textContent = "The randomly picked name is: " + names[randomIndex].textContent;
  const okayButton = document.createElement('button');
  okayButton.classList.add('okay-button'); // Add class for styling
  okayButton.textContent = "Okay";
  okayButton.onclick = function() {
    resultBox.style.display = 'none';

  };
 

}
setTimeout(() => {
  const loadingScreen = document.querySelector('.loading-screen');
  loadingScreen.classList.add('expand'); // Add expand animation 
 loadingScreen.classList.add('fade-out'); // Add expand animation
  

  // After delay + expansion animation duration, hide the loading screen
  setTimeout(() => {
    loadingScreen.style.display = 'none'; // Hide using display property
  }, 1000); // Adjust delay based on animation duration (2s for expand + desired hiding delay)
}, 2000);
const usernameSpan = document.getElementById('username');
const welcometonotes = document.getElementById('welcometonotes');
const usernameInput = document.getElementById('username-input');


// Check if the username is stored in localStorage
let username = localStorage.getItem('username');

// Get the current hour
const currentHour = new Date().getHours();

// Determine the greeting based on time
let greeting = '';
if (currentHour >= 5 && currentHour < 12) {
  greeting = 'Good morning, ';
} else if (currentHour >= 12 && currentHour < 18) {
  greeting = 'Good afternoon, ';
} else {
  greeting = 'Good evening, ';
}

// If username not found, display the input box
if (!username) {
  usernameSpan.textContent = greeting + 'please enter your name:';
  usernameInput.style.display = 'block';
} else {
  usernameSpan.textContent = greeting + username;
  usernameInput.style.display = 'none';
  nameinput.style.display = 'none';
}

function setUsername() {
  username = usernameInput.value;
  localStorage.setItem('username', username);
  usernameSpan.textContent = greeting + username;
  usernameInput.style.display = 'none';
  nameinput.style.display = 'none';
}




const button = document.getElementById("chat-with-journey-button");
const script = document.querySelector("script[src='https://api.lingoblocks.com/chatbot-embed.js']");

button.addEventListener("click", () => {
  script.remove();
  const newScript = document.createElement("script");
  newScript.src = "https://api.lingoblocks.com/chatbot-embed.js";
  newScript.dataset.lingoId = "9gtTPCyZMVg8mRwrAmMY";
  newScript.type = "module";
  document.head.appendChild(newScript);
});

// this one is a test for NUMBERS - sumeet
