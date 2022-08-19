const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
// function getUser(username) {
//   axios
//     .get(APIURL + username)
//     .then((response) => console.log(response.data))
//     .catch((err) => console.log(err));
// }

// ASYNC AWAIT

async function getUser(username) {
  try {
    const response = await axios.get(APIURL + username);
    createUserCard(response.data);
    getRepos(username);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("No profile with this username");
    }
  }
}

function createUserCard(user) {
  const cardHTML = `<div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            alt="${user.username}"
            class="avater"
          />
          <div class="user-info">
            <h2>${user.name}</h2>
            <p>
             ${user.bio}
            </p>
            <ul>
              <li>${user.followers}<strong>followers</strong></li>
              <li>${user.following} <strong>following</strong></li>
              <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>
            <div id="repos">
             
            </div>
          </div>
        </div>
      </div>`;

  main.innerHTML = cardHTML;
}

async function getRepos(username) {
  try {
    const response = await axios.get(
      APIURL + username + "/repos?sort=createdper_page=10"
    );
    addReposToCard(response.data);
  } catch (err) {
    createErrorCard("Problem fetching repo");
  }
}

function createErrorCard(message) {
  const cardHTML = `<div class="card">
    <h1>${message}</h1>
    </div>`;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  repos.forEach(function (repo) {
    const repoLink = document.createElement("a");
    repoLink.classList.add("repo");
    repoLink.href = repo.html_url;
    repoLink.target = "_blank";
    repoLink.innerHTML = repo.name;

    reposEl.appendChild(repoLink);
  });
}

form.addEventListener("submit", (e) => {
  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
  e.preventDefault();
});
