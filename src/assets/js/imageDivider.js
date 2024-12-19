const container1 = document.querySelector('.container1');
document.querySelector('.slider1').addEventListener('input', (e) => {
  container1.style.setProperty('--position', `${e.target.value}%`);
})

const container2 = document.querySelector('.container2');
document.querySelector('.slider2').addEventListener('input', (e) => {
  container2.style.setProperty('--position', `${e.target.value}%`);
})

const container3 = document.querySelector('.container3');
document.querySelector('.slider3').addEventListener('input', (e) => {
  container3.style.setProperty('--position', `${e.target.value}%`);
})