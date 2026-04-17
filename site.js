const cursor = document.getElementById('cursor');

const ring = document.getElementById('cursor-ring');

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {

  mx = e.clientX;

  my = e.clientY;

  if (cursor) {

    cursor.style.left = mx + 'px';

    cursor.style.top = my + 'px';

  }

});

function animateRing() {

  rx += (mx - rx) * 0.12;

  ry += (my - ry) * 0.12;

  if (ring) {

    ring.style.left = rx + 'px';

    ring.style.top = ry + 'px';

  }

  requestAnimationFrame(animateRing);

}

animateRing();

document.querySelectorAll('a, button').forEach(el => {

  el.addEventListener('mouseenter', () => {

    if (cursor) {

      cursor.style.width = '14px';

      cursor.style.height = '14px';

    }

    if (ring) {

      ring.style.width = '44px';

      ring.style.height = '44px';

      ring.style.borderColor = 'rgba(184,155,106,0.8)';

    }

  });

  el.addEventListener('mouseleave', () => {

    if (cursor) {

      cursor.style.width = '8px';

      cursor.style.height = '8px';

    }

    if (ring) {

      ring.style.width = '32px';

      ring.style.height = '32px';

      ring.style.borderColor = 'rgba(184,155,106,0.5)';

    }

  });

});

const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {

  if (nav) {

    nav.classList.toggle('scrolled', window.scrollY > 60);

  }

});

const reveals = document.querySelectorAll('.reveal');

if (reveals.length) {

  const observer = new IntersectionObserver(entries => {

    entries.forEach(e => {

      if (e.isIntersecting) {

        e.target.classList.add('visible');

        observer.unobserve(e.target);

      }

    });

  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

}

const heroImg = document.querySelector('.hero-image-wrap img');

window.addEventListener('scroll', () => {

  if (heroImg) {

    const scrolled = window.scrollY;

    heroImg.style.transform = `translateY(${scrolled * 0.08}px)`;

  }

});
