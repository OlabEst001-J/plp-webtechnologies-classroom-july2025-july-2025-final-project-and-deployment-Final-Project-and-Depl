document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  const email = document.getElementById('email').value;
  if (email === '') {
    alert('Please enter your email.');
    e.preventDefault();
  }
});
