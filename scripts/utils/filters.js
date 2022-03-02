function sortByLikes(medias) {
  medias.sort((a, b) => {
    return b.likes - a.likes;
  });
}

function sortByDate(medias) {
  medias.sort((a, b) => {
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);
    return dateA - dateB;
  });
}

function sortByTitle(medias) {
  medias.sort((a, b) => {
    let titleA = a.title.toLowerCase();
    let titleB = b.title.toLowerCase();
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
  });
}

export { sortByLikes, sortByDate, sortByTitle };
