
const buttons = document.querySelectorAll('#btn');


buttons.forEach(btn => {
  btn.addEventListener('click', function() {
    buttons.forEach(button => {
      button.classList.remove('size-active');
      button.classList.add('size');
    });
    this.classList.add('size-active');
  });
});






