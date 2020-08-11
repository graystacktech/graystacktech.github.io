var typeWriter = {
  i: 0,
  currText: '',
  deleting: false,
};

function typeWrite(container, data) {
  var text = data[typeWriter.i];
  var delta = 200 - Math.random() * 100;

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
  var typedData = [
    'React.',
    'PHP.',
    'Node.js.',
    'Java.',
    'Spring-boot.',
  ];
  var container = document.getElementById('typed');
  typeWrite(container, typedData);
}

window.onload = main;