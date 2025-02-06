const carta = document.getElementById('carta');
const lista = document.getElementById('lista');
const botonAbrir = document.getElementById('abrir-lista');
const elementos = lista.querySelectorAll('li');

botonAbrir.addEventListener('click', () => {
  carta.style.display = 'none';
  lista.style.display = 'block';
});

elementos.forEach(elemento => {
  const span = document.createElement('span'); // Crear el elemento span
  span.textContent = elemento.dataset.cosa; // Asignar la cosa al span
  elemento.appendChild(span); // Agregar el span al li

  elemento.addEventListener('click', () => {
    span.style.display = 'block'; // Mostrar el span
  });

  elemento.addEventListener('mouseover', () => {
    const colores = ['#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    elemento.style.color = colorAleatorio;
  });
});
