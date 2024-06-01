function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  var dropzone = event.target;
  
  if (dropzone.tagName.toLowerCase() === 'img') {
      dropzone = dropzone.parentNode;
  }
  dropzone.innerHTML = ''; 
  dropzone.appendChild(draggedElement);
}

function getRandomImages() {
  const images = [
      "images/Transporte-sombras/1.jpg",
      "images/Transporte-sombras/2.jpg",
      "images/Transporte-sombras/3.jpg",
      "images/Transporte-sombras/4.jpg",
      "images/Transporte-sombras/5.jpg",
      "images/Transporte-sombras/6.jpg"
  ];

  const shuffledImages = images.sort(() => 0.5 - Math.random());

  document.getElementById('sombra1').src = shuffledImages[0];
  document.getElementById('sombra2').src = shuffledImages[1];
  document.getElementById('sombra3').src = shuffledImages[2];
  document.getElementById('sombra4').src = shuffledImages[3];
  document.getElementById('sombra5').src = shuffledImages[4];
  document.getElementById('sombra6').src = shuffledImages[5];
}

window.onload = getRandomImages;