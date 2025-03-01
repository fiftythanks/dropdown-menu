import './style.css';

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

function toggleMenu(toggleEvent) {
  function closeOnClickOutside(e) {
    if (
      e.type === 'click' &&
      e.target !== menu &&
      !Array.from(menu.children).includes(e.target) &&
      e.target !== menuBtn
    ) {
      toggleMenu(e);
    }
  }
  if (menu.style.display === 'none') {
    toggleEvent.stopPropagation();
    menu.style.display = 'block';
    document.onclick = closeOnClickOutside;
  } else {
    toggleEvent.stopPropagation();
    menu.style.display = 'none';
    document.onclick = null;
  }
}

menuBtn.addEventListener('click', toggleMenu);

// When you click on a list item, the child anchor element activates, as if you clicked on the link.
Array.from(menu.children).forEach((item) => {
  item.addEventListener('click', (e) => {
    const link = item.querySelector('a');
    if (e.target !== link) link.click();
  });
});

// Keyboard Support
function openOnFocus() {
  function pressKey(e) {
    switch (e.key) {
      case 'ArrowDown':
        if (menu.style.display === 'none') toggleMenu(e);
        menu.querySelector('a').focus();
        break;
      case 'Enter':
        if (menu.style.display === 'none') {
          toggleMenu(e);
          menu.querySelector('a').focus();
        } else {
          toggleMenu(e);
        }
        break;
      case ' ':
        if (menu.style.display === 'none') {
          toggleMenu(e);
          menu.querySelector('a').focus();
        } else {
          toggleMenu(e);
        }
        break;
      case 'ArrowUp':
        if (menu.style.display === 'none') toggleMenu(e);
        menu.children[menu.children.length - 1].firstElementChild.focus();
        break;
      default:
      // Do nothing
    }
  }
  menuBtn.onkeydown = (e) => {
    if (
      e.key === 'ArrowDown' ||
      e.key === 'ArrowUp' ||
      e.key === ' ' ||
      e.key === 'Enter'
    ) {
      e.preventDefault();
      if (!e.repeat) menuBtn.onkeyup = pressKey;
    }
  };
}

menuBtn.addEventListener('focus', openOnFocus);
Array.from(menu.children).forEach((item) => {
  const link = item.querySelector('a');

  // When the menu is focused and the focus moves to an element that is neither the menu's child element nor the menu button, the menu closes.
  link.addEventListener('blur', (e) => {
    const focusedElement = e.relatedTarget;
    if (!menu.contains(focusedElement) && focusedElement !== menuBtn) {
      toggleMenu(e);
      menuBtn.onkeydown = null;
      menuBtn.onkeyup = null;
    }
  });

  // ADD MENU NAVIGATION HERE
});
