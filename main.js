const iconMenu = document.getElementById("icon-container");
const menu = document.getElementById("menu");

iconMenu.addEventListener('click', () => {
  menu.classList.toggle("show");
  iconMenu.classList.toggle("active");
})

document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.item-section');
  
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      menuItems.forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');
    });
  });
});