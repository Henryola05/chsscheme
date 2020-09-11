const icon = document.getElementById('icon');
const myLinks = document.getElementById('myLinks');

icon.addEventListener('click', () => {
  myLinks.classList.toggle('show');
});