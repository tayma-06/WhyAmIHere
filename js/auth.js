const modal = document.getElementById('auth-modal');
const loginBtn = document.getElementById('login-btn');
const closeBtn = document.querySelector('.close');
const tabs = document.querySelectorAll('.tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    if (tab.dataset.tab === 'login') {
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
    } else {
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
    }
  });
});

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Login submitted!');
});

signupForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Signup submitted!');
});
