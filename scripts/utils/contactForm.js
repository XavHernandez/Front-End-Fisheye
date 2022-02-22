function displayModal() {
  const contactButton = document.querySelector(".contact_button");
  contactButton.addEventListener("click", () => {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
  });
}

function closeModal() {
  const closeButton = document.querySelector(".modal header img");
  closeButton.addEventListener("click", () => {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
  });
}

export { displayModal, closeModal };
