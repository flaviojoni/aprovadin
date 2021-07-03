const navSlide = () => {
  const burguer = document.querySelector('.burguer');
  const nav = document.querySelector('.tablet-desktop-nav');

  burguer.addEventListener('click', () => {
    nav.classList.toggle('tablet-desktop-nav-active');
  })
}

navSlide();