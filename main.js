const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f493574019msh66329473641fb71p1ef2ebjsnc9689afb80bd",
    "X-RapidAPI-Host": "daddyjokes.p.rapidapi.com",
  },
};

document.getElementById("btn").addEventListener("click", function () {
  fetch("https://daddyjokes.p.rapidapi.com/random", options)
    .then((response) => {
      // if (response.ok === false && response.status === 429) {
      //   throw new Error("Sorry, not today");
      // }
      return response.json();
    })
    .then((response) => {
      if (response.joke) {
        document.getElementById("punchline").textContent = response.joke;
      } else {
        document.getElementById("punchline").textContent =
          "Come back tomorrow to read more jokes.";
      }
    })
    .catch((err) => console.error(err));
});
