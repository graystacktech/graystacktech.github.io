let menuVisible = false;

function toggleMenuClickIcons() {
  const paths = document.querySelectorAll('#menu-btn path');
  if (menuVisible) {
    paths[0].classList.add('hidden');
    paths[1].classList.remove('hidden');
  } else {
    paths[1].classList.add('hidden');
    paths[0].classList.remove('hidden');
  }
}

function toggleMenuLogo() {
  const logo = document.querySelector('#logo');
  if (menuVisible) {
    logo.classList.add('hidden');
  } else {
    logo.classList.remove('hidden');
  }
}

function toggleMenuDiv() {
  const menu = document.querySelector('#menu');
  if (menuVisible) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
}

function fixMenuIconPosition() {
  const logoCon = document.querySelector('#logo-container');
  if (menuVisible) {
    logoCon.classList.remove('justify-between');
    logoCon.classList.add('justify-end');
  } else {
    logoCon.classList.add('justify-between');
    logoCon.classList.remove('justify-end');
  }
}

function toggleMenu() {
  menuVisible = !menuVisible;
  toggleMenuClickIcons();
  toggleMenuLogo();
  toggleMenuDiv();
  fixMenuIconPosition();
}

let typeWriter = {
  i: 0,
  currText: '',
  deleting: false,
};

function typeWrite(container, data) {
  let text = data[typeWriter.i];
  let delta = 200 - Math.random() * 100;

  if (typeWriter.deleting) {
    typeWriter.currText = text.substring(0, typeWriter.currText.length - 1);
    delta /= 2;
    if (typeWriter.currText === '') {
      typeWriter.deleting = false;
      delta = 500;
      typeWriter.i++;
      if (typeWriter.i === data.length) {
        typeWriter.i = 0;
      }
    }
  } else {
    typeWriter.currText = text.substring(0, typeWriter.currText.length + 1);
    if (typeWriter.currText === text) {
      typeWriter.deleting = true;
      delta = 2000;
    }
  }
  container.innerHTML = typeWriter.currText;
  setTimeout(function () {
    typeWrite(container, data);
  }, delta);
}

function main() {
  const typedData = [
    'React.',
    'Node.js.',
    'Express.',
    'Java.',
    'Spring.',
  ]
  const typedContainer = document.querySelector('#typed');
  typeWrite(typedContainer, typedData);
}