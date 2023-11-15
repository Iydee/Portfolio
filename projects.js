function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("repositories-container");

  fetch("https://api.github.com/users/Iydee/repos")
      .then(response => response.json())
      .then(repositories => {
          // Sort repositories alphabetically by name
          repositories.sort((a, b) => a.name.localeCompare(b.name));

          repositories.forEach(repo => {
              const repoElement = document.createElement("div");
              repoElement.classList.add("repository");
              repoElement.innerHTML = `
                  <h3>${repo.name}</h3>
                  <a href="${repo.html_url}" target="_blank">View on GitHub</a>
              `;
              container.appendChild(repoElement);
          });
      })
      .catch(error => console.error("Error fetching repositories:", error));
});
