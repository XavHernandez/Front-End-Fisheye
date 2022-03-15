function displayModal() {
  const contactButton = document.querySelector(".contact_button");
  contactButton.addEventListener("click", () => {
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", true);
    const modalWrapper = document.getElementById("contact_modal");
    modalWrapper.style.display = "block";
    modalWrapper.setAttribute("aria-hidden", false);
  });
}

function closeModal() {
  const closeButton = document.querySelector(".modal header img");
  closeButton.addEventListener("click", () => {
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", false);
    const modalWrapper = document.getElementById("contact_modal");
    modalWrapper.style.display = "none";
    modalWrapper.setAttribute("aria-hidden", true);
  });
}

export { displayModal, closeModal };
