const modal = document.querySelector('.modal');
const responsiveNav = document.querySelector('.responsive_nav');
const responsiveNavOpen = document.querySelector('.responsive-nav-open');
const responsiveNavClose = document.querySelector('.responsive-nav-close');
const btnOpenModal = document.querySelector('.btn-open-modal');
const btnCloseModal = document.querySelector('.btn-close-modal');
const respOpenModal = document.querySelector('.resp-open-modal');
const respCloseModal = document.querySelector('.resp-close-modal');

btnOpenModal.addEventListener('click', () => {
  event.preventDefault();
  modal.style.display = 'flex';

  btnCloseModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});

respOpenModal.addEventListener('click', () => {
  modal.style.display = 'flex';

  respCloseModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});

responsiveNavOpen.addEventListener('click', () => {
  responsiveNav.classList.add('active');

  responsiveNavClose.addEventListener('click', () => {
    responsiveNav.classList.remove('active');
  });
});

$(document).ready(function () {
  $('.flip').click(function () {
    $(this).next().toggle();
    $(this).addClass('active');
    $(this).siblings('.flip').removeClass('active');
  });
});
