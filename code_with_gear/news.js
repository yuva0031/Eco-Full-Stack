window.addEventListener('load', function() {
    var postModules = document.querySelectorAll('.post-module');
    
    postModules.forEach(function(postModule) {
      postModule.addEventListener('mouseenter', function() {
        var description = this.querySelector('.description');
        if (description) {
          description.style.transition = 'height 0.3s, opacity 0.3s';
          description.style.height = 'auto';
          description.style.opacity = '1';
        }
      });
      
      postModule.addEventListener('mouseleave', function() {
        var description = this.querySelector('.description');
        if (description) {
          description.style.transition = 'height 0.3s, opacity 0.3s';
          description.style.height = '0';
          description.style.opacity = '0';
        }
      });
    });
  });
  