document.addEventListener('DOMContentLoaded', function() {
  var dropdowns = document.querySelectorAll('#menu > li');

  dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('click', function(event) {
      var submenu = this.querySelector('ul');
      var span = this.querySelector('span');

      if (submenu) {
        event.preventDefault();
        submenu.classList.toggle('show');
      }
      if (submenu.classList.contains('show')) {
        span.textContent = '-';
      } else {
        span.textContent = '+';
      }
    });

    dropdown.addEventListener('click', function(event) {
      var parentMenu = this.closest('ul');

      if (parentMenu && parentMenu.id === 'menu') {
        event.stopPropagation();
      }
    });
  });

  document.addEventListener('click', function(event) {
    var menus = document.querySelectorAll('#menu ul');
    menus.forEach(function(menu) {
      menu.classList.remove('show');
    });
  });
});