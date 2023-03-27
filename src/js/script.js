const button = document.querySelector('#button');
button.addEventListener('click', showPopout);

function showPopout() {
  const popout = document.createElement('div');
  popout.id = 'popout';
  document.body.appendChild(popout);
  
  const gallery = document.createElement('div');
  gallery.id = 'gallery';
  popout.appendChild(gallery);
  
  const images = [
    'sandra1.jpg',
  ];
  
  images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    gallery.appendChild(img);
  });
  
  popout.addEventListener('click', () => {
    popout.remove();
  });
}