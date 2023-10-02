function moveAssistantToButton(buttonId, explanationText) {
  const button = document.getElementById(buttonId);
  const assistantContainer = document.querySelector('.assistant-container');
  const explanation = document.getElementById('explanation');

  assistant.style.left = button.offsetLeft + 'px';
  assistant.style.top = button.offsetTop + button.offsetHeight + 'px';
  
  // Move the explanation text just below the assistant image
  explanation.style.marginTop = '10px'; // Add margin for spacing

  assistant.style.opacity = 1;

  // Remove any previously added classes
  assistant.classList.remove('highlight-button');

  // Add a class to highlight the button (you can define this class in CSS)
  button.classList.add('highlight-button');

  // Set the explanation text
  explanation.innerText = explanationText;
}

// Usage when clicking a button
document.getElementById('btn1').addEventListener('click', () => {
  moveAssistantToButton('btn1', "This button performs an important action.");
});

document.getElementById('btn2').addEventListener('click', () => {
  moveAssistantToButton('btn2', "Clicking this button takes you to another page.");
});

// Usage for hover interactions (assuming you have elements with class 'hover-element')
const hoverElements = document.querySelectorAll('.hover-element');

hoverElements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    const rect = element.getBoundingClientRect();
    const explanationText = "This is an interactive element.";
    
    moveAssistantToButton(element.id, explanationText);
  });

  element.addEventListener('mouseleave', () => {
    // Clear the explanation text when not hovering
    document.getElementById('explanation').innerText = "";
  });
});