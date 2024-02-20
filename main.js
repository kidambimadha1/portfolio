function addBackgroundHover() {
  const el = document.getElementsByClassName('wr-main');
  document.addEventListener('mousemove', (e) => {
    if (el[0]) {
      el[0].setAttribute('style', `background:radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%);`);
    }
  })
}

addBackgroundHover();

function addHoverForLinks() {
  const el = document.querySelectorAll('.wrc-left-nav a');
  for (let i = 0; i < el.length; i++) {
    el[i].addEventListener('click', (e) => {

      const elems = document.querySelectorAll('.wrc-left-nav a.active');
      for (let i = 0; i < elems.length; i++) {
        elems[i].classList.toggle('active');
      }
      el[i].classList.toggle('active');
    });
  }
}

addHoverForLinks()