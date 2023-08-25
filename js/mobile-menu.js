(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
  }
})();



// Closing and opening of the modal using the .is-hidden class works because Javascript. When the "Open Modal/Order Service" button is clicked, the toggleModal function removes the "is-hidden" class from the modal element, making the modal visible and interactive. When the "Close Modal" button is clicked, the same function toggles the "is-hidden" class back, making the modal hidden and non-interactive. This creates the behavior of opening and closing the modal.
