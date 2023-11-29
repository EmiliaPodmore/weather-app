function searchCity(city) {
  let apiKey = "97ca3fd7c1847b8c2t8cf2o00a730a3a";
  let apiURL =
    "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
