(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();



// Closing and opening of the modal using the .is-hidden class works because Javascript. When the "Open Modal/Order Service" button is clicked, the toggleModal function removes the "is-hidden" class from the modal element, making the modal visible and interactive. When the "Close Modal" button is clicked, the same function toggles the "is-hidden" class back, making the modal hidden and non-interactive. This creates the behavior of opening and closing the modal.
