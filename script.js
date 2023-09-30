
const formulario = document.getElementById("registroForm");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;

  const formData = {
    nombre,
    apellido,
    fechaNacimiento
  };

  const url = "https://jsonplaceholder.typicode.com/users";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      console.log("Respuesta del servidor:", data);
    })
});