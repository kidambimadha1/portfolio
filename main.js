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

addHoverForLinks();

const topElem = document.getElementsByClassName('top')
topElem[0].addEventListener('click', () => {
  window.scrollTo(0, 0);
})

const sections = Array.from(document.querySelectorAll('section#about,section#experience,section#awards'));
const navLinks = Array.from(document.querySelectorAll('a[href="#about"],a[href="#experience"],a[href="#awards"]'))
function navLinkChange(e) {
  let offsets = sections.map(x => x.getBoundingClientRect());
  offsets.forEach((x, i) => {
    if (window.scrollY > x.top) {
      navLinks.forEach(x => x.classList.remove('active'));
      navLinks[i].classList.toggle('active');
      return;
    }
  })
}

window.addEventListener('scroll', navLinkChange);

window.removeEventListener('unload', navLinkChange);