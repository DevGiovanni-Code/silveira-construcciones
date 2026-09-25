(() => {
  const header = document.querySelector('.site-header');
  const menuButton = header?.querySelector('.menu-toggle');
  const navigation = header?.querySelector('.main-nav');

  if (!header || !menuButton || !navigation) return;

  // Navegación móvil
  const mobileViewport = window.matchMedia('(max-width: 69.999rem)');

  function setMenuState(isOpen, restoreFocus = false) {
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    navigation.hidden = mobileViewport.matches && !isOpen;

    if (restoreFocus && mobileViewport.matches) menuButton.focus();
  }

  function syncNavigation() {
    const focusedElement = document.activeElement;
    menuButton.hidden = !mobileViewport.matches;
    setMenuState(false);

    if (mobileViewport.matches && navigation.contains(focusedElement)) {
      menuButton.focus();
    } else if (!mobileViewport.matches && focusedElement === menuButton) {
      navigation.querySelector('[aria-current="page"]').focus();
    }
  }

  menuButton.addEventListener('click', () => {
    setMenuState(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', (event) => {
    if (mobileViewport.matches && event.target.closest('a')) {
      setMenuState(false, true);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      event.preventDefault();
      setMenuState(false, true);
    }
  });

  header.addEventListener('focusout', (event) => {
    if (mobileViewport.matches && event.relatedTarget && !header.contains(event.relatedTarget)) {
      setMenuState(false);
    }
  });

  mobileViewport.addEventListener('change', syncNavigation);
  window.addEventListener('pageshow', syncNavigation);
  syncNavigation();
  header.classList.add('is-enhanced');

  // Estado del header al hacer scroll
  function updateHeaderState() {
    const threshold = header.classList.contains('is-scrolled') ? 8 : 48;
    header.classList.toggle('is-scrolled', window.scrollY > threshold);
  }

  window.addEventListener('scroll', updateHeaderState, { passive: true });
  window.addEventListener('pageshow', updateHeaderState);
  updateHeaderState();
})();
