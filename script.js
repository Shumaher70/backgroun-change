const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  wrapper.style.backgroundColor = `#${randomColorNum()}`;
  btn.textContent = `#${randomColorNum()}`;
});

//fucntion random color
function randomColorNum() {
  let colorEl = [];
  for (let i = 0; i < 6; i++) {
    colorEl.push(randomNum());
  }
  return colorEl.join('');
}

//fucntion random number
function randomNum() {
  return Math.floor(Math.random() * 10);
}
