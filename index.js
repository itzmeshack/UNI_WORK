var button = document.getElementById('btn-click');

// Define a function to be executed when the button is clicked
function handleClick() {
  alert('Button clicked!');
}

// Attach the handleClick function to the button's onclick event
button.onclick = handleClick;
