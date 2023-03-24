// Selecciona todos los elementos con la clase "nav-button"
const navButtons = document.querySelectorAll('.nav-button');

// Agrega un evento "mouseover" y "mouseout" a cada botón
for (let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener('mouseover', function() {
    // Agrega una animación al elemento cuando se pasa el mouse por encima
    this.animate([
      { transform: 'translateY(5px)' },
      { transform: 'translateY(-2px)' }
    ], {
      duration: 300,
      easing: 'ease-in-out'
    });
    // Cambia el color de las letras a naranja
    this.style.color = 'orange';
  });
  navButtons[i].addEventListener('mouseout', function() {
    // Cambia el color de las letras al color original
    this.style.color = '';
  });
}
