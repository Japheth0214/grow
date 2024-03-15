document.getElementById('growButton').addEventListener('click', function() {
  var button = document.getElementById('growButton');

  // Double the size
  button.style.transform = 'scale(2)';

  // Generate a random color
  var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

  // Change button color
  button.style.backgroundColor = randomColor;

  // Reset size after a short delay
  setTimeout(function() {
    button.style.transform = 'scale(1)';
  }, 300);
});
