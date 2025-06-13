let questions = [
  {
  question: "Do you listen to music while working or relaxing?",
  options: { a: "Yes", b: "No" },
  correctAnswer: "a",
  correctResponse: "Music is a perfect mood booster!",
  incorrectResponse: "Silence can be peaceful too!"
  },
  {
  question: "Do you prefer series or movies on a chill night?",
  options: { a: "Series", b: "Movies" },
  correctAnswer: "a",
  correctResponse: "Binge-worthy shows are the best!",
  incorrectResponse: "Movies are great for a one-shot story!"
  },
  {
  question: "Do you play video games to unwind?",
  options: { a: "Yes", b: "No" },
  correctAnswer: "a",
  correctResponse: "Gaming can be a great escape!",
  incorrectResponse: "That’s okay — everyone relaxes differently!"
  }

];

let currentQuestionIndex = 0;
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");

displayQuestion();

function displayQuestion() {
  let currentQuestion = questions[currentQuestionIndex];

  let optionsHTML = Object.keys(currentQuestion.options).map(key => `<br>${key}. ${currentQuestion.options[key]}`).join('');
  let botResponse = document.createElement("div");
  botResponse.classList.add("message", "bot-message");
  botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.question}${optionsHTML}`;
  chatContainer.appendChild(botResponse);
  scrollChatContainerToBottom();
}

function scrollChatContainerToBottom() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

chatForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let userResponse = userInput.value.toLowerCase().trim();
  
  if (!userResponse) return;
  
  let userMessage = document.createElement("div");
  userMessage.classList.add("message", "user-message");
  userMessage.innerHTML = `<strong>You:</strong> ${userResponse}`;
  chatContainer.appendChild(userMessage);
  
  let currentQuestion = questions[currentQuestionIndex];
  let botResponse = document.createElement("div");
  botResponse.classList.add("message", "bot-message");
  
  if (userResponse === currentQuestion.correctAnswer) {
      botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.correctResponse}`;
  } else {
      botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.incorrectResponse}`;
  }
  chatContainer.appendChild(botResponse);
  
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  userInput.value = "";
  
  setTimeout(displayQuestion, 1000);
  scrollChatContainerToBottom();
});