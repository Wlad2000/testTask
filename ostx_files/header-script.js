$(document).ready(function() {
    $('.header__burger').click(function(e){
        $('.header__burger,.header__menu').toggleClass('active');
    })
})

// Отримання елементів DOM
const popup = document.getElementById('popup');

//const orderForm = document.getElementById('orderForm');



// Визначення, коли показувати попап
window.addEventListener('scroll', () => {
  const commentsSection = document.querySelector('.start-popup');
  const commentsSectionPosition = commentsSection.getBoundingClientRect().top;
  const commentsSectionPositionClose = commentsSection.getBoundingClientRect().bottom;
  if (commentsSectionPosition <= window.innerHeight && commentsSectionPositionClose >= window.innerHeight) {
    popup.classList.add('active');
  }
  
});

// Додавання обробників подій
//closePopup.addEventListener('click',  popup.classList.remove('active'));
$(document).ready(function() {
    $('.closePopup').click(function(e){
        popup.classList.remove('active');
    })
})