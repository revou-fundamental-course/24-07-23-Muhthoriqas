// Header Manipulation When Scroll
window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  var navLinks = document.querySelectorAll('.nav-links');
  var bars = document.querySelector('.bars');
  var scrolled = window.scrollY > 0;
  header.classList.toggle('scrolled', scrolled);
  bars.classList.toggle('scrolled', scrolled);
  navLinks.forEach(function (navLink) {
    navLink.classList.toggle('scrolled', scrolled);
  });
});

// Header Responsive
const barsIcon = document.getElementById('bars');
const dropdownMenu = document.getElementById('dropdown-menu');

barsIcon.addEventListener('click', function () {
  dropdownMenu.classList.toggle('show');
});

// Hide the dropdown menu when a link is clicked
const navLinks = document.getElementsByClassName('nav-links');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    dropdownMenu.classList.remove('show');
  });
}

// Banner Slides Function
const showSlide = (n) => {
  var slides = document.getElementsByClassName('slides-image');
  if (n > slides.length) {
    currentSlide = 1;
  }
  if (n < 1) {
    currentSlide = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[currentSlide - 1].style.display = 'block';
};

var currentSlide = 1;
showSlide(currentSlide);

const changeSlide = (n) => {
  showSlide((currentSlide += n));
};
setInterval(() => {
  changeSlide(1);
}, 5000);

const buttonleft = document.getElementById('buttonleft');
buttonleft.addEventListener('click', () => {
  changeSlide(-1);
});

const buttonright = document.getElementById('buttonright');
buttonright.addEventListener('click', () => {
  changeSlide(1);
});

// Form Validation
const validateForm = () => {
  const nameInput = document.getElementById('name');
  const nameValue = nameInput.value.trim();
  const selectElement = document.getElementById('travel-select');
  const selectedValue = selectElement.value;
  const errorMessageElement = document.getElementById('error-msg');

  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value.trim();

  if (nameValue === '') {
    errorMessageElement.innerHTML = 'Nama tidak boleh kosong.';
    return false;
  }

  if (nameValue.length < 3) {
    errorMessageElement.innerHTML =
      'Nama harus terdiri dari minimal 3 karakter.';
    return false;
  }

  if (selectedValue === 'default') {
    errorMessageElement.innerHTML = 'Anda belum memilih lokasi';
    return false;
  }

  const stringemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!stringemail.test(emailValue)) {
    errorMessageElement.innerHTML = 'Masukkan alamat email yang valid.';
    return false;
  }

  errorMessageElement.innerHTML = '';
  return true;
};
