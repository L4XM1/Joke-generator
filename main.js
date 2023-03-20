const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f493574019msh66329473641fb71p1ef2ebjsnc9689afb80bd",
    "X-RapidAPI-Host": "daddyjokes.p.rapidapi.com",
  },
};

document.getElementById("btn").addEventListener("click", function () {
  fetch("https://daddyjokes.p.rapidapi.com/random", options)
    .then((response) => response.json())
    .then((response) => {
      document.getElementById("punchline").textContent = response.joke;
    })
    .catch((err) => console.error(err));
});
