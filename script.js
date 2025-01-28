function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
  }

  function closeMenu() {
    document.getElementById('navMenu').classList.remove('active');
  }