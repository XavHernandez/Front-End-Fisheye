function photographerProfilFactory(data) {
  console.log(data);

  function getPhotographerCardDOM() {
    const profilCard = `
      <article class="photographer_card">
        <a href="photographer.html?id=${data.id}" role="link" aria-label="Profil de ${data.name}">
          <img class="photographer_img" src="/assets/photographers/${data.portrait}">
          <h2 class="photographer_name">${data.name}</h2>
        </a>
        <p class="photographer_location">${data.city}, ${data.country}</p>
        <p class="photographer_tagline">${data.tagline}</p>
        <p class="photographer_price">${data.price}€/jour</p>
      </article>
    `;
    return profilCard;
  }
  return { getPhotographerCardDOM };
}

export { photographerProfilFactory };
