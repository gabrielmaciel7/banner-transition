let time = 5000,
  currentIndex = 0,
  radiosInputs = document.querySelectorAll(".transition input"),
  max = radiosInputs.length;

function setCurrentIndex() {
  for (index = 0; max - 1; index++) {
    if (radiosInputs[index].checked) {
      currentIndex = index;
      break;
    }
  }
}

function nextImage() {
  setCurrentIndex();

  currentIndex++;

  if (currentIndex >= max) currentIndex = 0;

  radiosInputs[currentIndex].checked = true;
}

function start() {
  setInterval(() => {
    nextImage();
  }, time);
}

window.addEventListener("load", start);
