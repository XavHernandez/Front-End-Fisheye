async function getData() {
  return fetch("../../data/photographers.json")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log("Unable to retrieve data from Api!", error));
}

export { getData };
