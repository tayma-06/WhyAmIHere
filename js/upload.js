const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Theme switch
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  themeToggle.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Live Preview
const memeImageInput = document.getElementById('meme-image');
const memeTitleInput = document.getElementById('meme-title');
const previewCard = document.getElementById('preview-card');

memeImageInput.addEventListener('change', function () {
  const file = this.files[0];
  const title = memeTitleInput.value || "Untitled";

  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewCard.innerHTML = `
        <h3>${title}</h3>
        <img src="${e.target.result}" alt="Meme Preview">
      `;
    };
    reader.readAsDataURL(file);
  } else {
    previewCard.innerHTML = `<p>No meme selected</p>`;
  }
});

// Upload Form Submission (frontend-only for now)
const uploadForm = document.getElementById('upload-form');
uploadForm.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Meme submitted successfully! (This is a frontend simulation)");
});
