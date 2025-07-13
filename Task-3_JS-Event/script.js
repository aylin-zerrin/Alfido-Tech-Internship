const btn = document.getElementById('colorBtn');
const colorDisplay = document.getElementById('colorCode');

btn.addEventListener('click', () => {
  const pastel = getRandomPastelColor();
  document.body.style.backgroundColor = pastel;
  colorDisplay.textContent = "Current Color: " + pastel;
});

function getRandomPastelColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 80%, 90%)`;  // brighter and softer pastels
}