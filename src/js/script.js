document.addEventListener('DOMContentLoaded', function(){
  var menuLinks = document.querySelectorAll('#mobile-menu a');
  menuLinks.forEach(function(link){
    link.addEventListener('click', function(e){
      e.preventDefault();
      var targetId = link.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      var targetPosition = targetElement.offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
});