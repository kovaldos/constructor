/* eslint-disable no-invalid-this */
// Burger menu - Start -

const initBurgerMenu = () => {
  const burgerMenuToggles = document.querySelectorAll('[data-toggle="burger-menu-toggle"]');
  if (burgerMenuToggles.length) {
    burgerMenuToggles.forEach((burgerMenuToggle) => {
      burgerMenuToggle.addEventListener('click', function () {
        const burgerMenuBody = this.closest('.main-nav').querySelector('[data-burger-menu="burger-menu-body"]');
        const subMenu = this.closest('.main-nav').querySelector('[data-menu="sub-menu"]');
        this.classList.toggle('is-active');
        burgerMenuBody.classList.toggle('is-active');
        subMenu.classList.toggle('is-active');
        // document.body.classList.toggle('scroll-lock');
      });
    });
  }
};
export {initBurgerMenu};
// Burger menu - End -

