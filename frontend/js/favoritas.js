window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);
  const deleteButton = document.getElementById("btn-delete");
  // Aqui debemos agregar nuestro fetch



  /* Codigo que debemos usar para mostrar los datos en el frontend
  let data = peliculas.data
*/
deleteButton.addEventListener("click", () => {
  const container = document.querySelector(".container");
  container.innerHTML = ""; // Esto eliminará todos los elementos hijos del contenedor
  localStorage.removeItem("favorita"); // Eliminar el elemento 'favorita' del localStorage
  const a = document.querySelector("#Favoritas");
  a.style.display = "none"; // Ocultar el elemento Favoritas si está visible
});

const data = JSON.parse(localStorage.getItem("favorita"));
if (data.length < 1) {
  const h1 = document.createElement("h1");
  h1.innerText = "No agregaste ninguna pelicula a Favoritas";
  app.appendChild(h1);
}else {
  data.forEach((movie) => {
 const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      card.appendChild(duracion);
    });
}
};
