const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d17d4f28bb0d529dc72b25d42c6f84fa&page=1";

const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=d17d4f28bb0d529dc72b25d42c6f84fa&query="';

const main = document.getElementById("main");
const submitBtn = document.getElementById("btn");
const submit = document.getElementById("form");
const search = document.getElementById("search");

getMovies(API_URL);
// Fetch movies from API
async function getMovies(url) {
  const response = await fetch(url);
  const data = await response.json();
  showMovies(data.results);
}
// Funtion for showing data from API to the UI
function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach(function (movie) {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movies");
    movieEl.innerHTML = `
        <img src="${IMAGE_PATH + poster_path}" alt="" />
        <div class="title">
          <h3>${title}</h3>
          <span class="${voteAverage(vote_average)}">${vote_average}</span>
        </div>
        <!-- overview -->
        <div class="overview">
          <h4>Overview</h4>
         ${overview}
        </div>
     `;
    main.appendChild(movieEl);
  });
}

// Function for vote average
function voteAverage(vote) {
  if (vote >= 7) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
// SEARCH BAR FUNCTIONALITIES
// event listener
submit.addEventListener("submit", function (e) {
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
    document.querySelector(".text").remove();
    document.querySelector(
      "aside"
    ).innerHTML = `<p class="new-text">All movies that match your search</p>`;
  } else {
    window.location.reload();
  }
  e.preventDefault();
});
