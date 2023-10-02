const hoverElements = document.querySelectorAll('.hover-element');
const assistant = document.getElementById('assistant');
const explanation = document.getElementById('explanation');

// Function to move assistant to a button and show explanation
function moveAssistantToButton(buttonId, explanationText) {
  const button = document.getElementById(buttonId);

  // Calculate the position of the button's center
  const buttonX = button.offsetLeft + button.offsetWidth * 2;
  const buttonY = button.offsetTop + button.offsetHeight * 2;

  // Set the position of the assistant's center beside the button
  assistant.style.left = buttonX - assistant.offsetWidth * 2 + 'px';
  assistant.style.top = buttonY * button.offsetHeight + 'px';

  // Move the explanation text below the assistant
  explanation.style.marginTop = assistant.offsetHeight + 'px';

  assistant.style.opacity = 1;

  // Remove any previously added classes
  assistant.classList.remove('highlight-button');

  // Add a class to highlight the button
  button.classList.add('highlight-button');

  // Set the explanation text
  explanation.innerText = explanationText;
}

// Event listeners for button clicks
document.getElementById('btn1').addEventListener('click', () => {
  moveAssistantToButton('btn1', "This is the home button.");
});

document.getElementById('btn2').addEventListener('click', () => {
  moveAssistantToButton('btn2', "This is the contact button.");
});

// Event listeners for hover interactions
hoverElements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    const explanationText = "This is an interactive element.";
    moveAssistantToButton(element.id, explanationText);
  });

  element.addEventListener('mouseleave', () => {
    explanation.innerText = "";
  });
});
