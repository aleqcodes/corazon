document.addEventListener('DOMContentLoaded', function() {
  // Elementos del DOM
  const popup = document.getElementById('popup');
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const message = document.getElementById('message');
  const audio = document.getElementById('winSound'); // Corregido el ID del audio
  const storyContainer = document.getElementById('story-container');
  const gameContainer = document.getElementById('game-container');
  const storySound = document.getElementById('storySound');
  
  // Pantallas de la historia
  const storyScreens = document.querySelectorAll('.story-screen');
  const storyButtons = document.querySelectorAll('.story-btn');
  
  // Inicialización
  let currentScreen = 0;
  let escapeCount = 0;
  
  // Ocultar todas las pantallas excepto la primera
  for (let i = 1; i < storyScreens.length; i++) {
    storyScreens[i].classList.add('hidden');
  }
  
  // Ocultar el contenedor del juego inicialmente
  gameContainer.classList.add('hidden');
  
  // Ocultar el popup inicialmente
  popup.style.display = 'none';
  popup.classList.add('hidden');
  
  // Configurar los botones de la historia
  storyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Reproducir sonido de transición
      storySound.play();
      
      // Ocultar la pantalla actual
      storyScreens[currentScreen].classList.add('hidden');
      
      // Si es el último botón, mostrar el juego
      if (index === storyButtons.length - 1) {
        storyContainer.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        initializeGame();
      } else {
        // Mostrar la siguiente pantalla
        currentScreen++;
        storyScreens[currentScreen].classList.remove('hidden');
      }
    });
  });
  
  // Función para inicializar el juego
  function initializeGame() {
    const grid = document.getElementById('grid');
    const squares = [];
    const gridSize = 16;
    let heartPosition;
    
    // Crear la cuadrícula
    for (let i = 0; i < gridSize; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.dataset.index = i;
      grid.appendChild(square);
      squares.push(square);
    }
    
    // Posición aleatoria para el corazón
    heartPosition = Math.floor(Math.random() * gridSize);
    
    // Añadir evento de clic a cada cuadrado
    squares.forEach(square => {
      square.addEventListener('click', function() {
        const index = parseInt(this.dataset.index);
        
        if (index === heartPosition) {
          // Mostrar el corazón
          this.innerHTML = '❤️';
          this.style.backgroundColor = '#f8e1e8';
          this.style.transform = 'scale(1.1)';
          
          // Reproducir sonido
          audio.play();
          
          // Mostrar el popup después de un retraso
          setTimeout(() => {
            popup.style.display = 'inline-block';
            popup.classList.remove('hidden');
          }, 1000);
        } else {
          // Mostrar una X
          this.innerHTML = '❌';
          this.style.backgroundColor = '#f8f8f8';
          this.style.opacity = '0.7';
        }
      });
    });
  }
  
  // Evento para el botón "Sí"
  yesBtn.addEventListener('click', function() {
    message.textContent = 'Gracias por aceptar compartir este camino de amor ❤️';
    message.style.fontStyle = 'italic';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    
    // Crear corazones flotantes adicionales
    for (let i = 0; i < 20; i++) {
      createFloatingHeart();
    }
  });
  
  // Evento para el botón "No"
  noBtn.addEventListener('mouseover', function(e) {
    // Mover el botón a una posición aleatoria
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    
    escapeCount++;
    
    // Después de varios intentos, cambiar el texto
    if (escapeCount > 5) {
      message.textContent = 'Quizás es el destino quien nos invita a estar juntos... 😊';
    }
  });
  
  // Función para crear corazones flotantes
  function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '100%';
    heart.style.opacity = '0';
    heart.style.animation = `floatHearts ${Math.random() * 3 + 3}s linear infinite`;
    heart.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(heart);
  }
});
