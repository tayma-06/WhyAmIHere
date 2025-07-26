const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  themeToggle.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

const categories = [
  { name: 'Dad Jokes', emoji: '👨' },
  { name: 'Gaming', emoji: '🎮' },
  { name: 'Coding', emoji: '💻' },
  { name: 'Animals', emoji: '🐱' },
  { name: 'Food', emoji: '🍕' },
  { name: 'Movies', emoji: '🎬' }
];

const floatingCategories = document.getElementById('floating-categories');

categories.forEach(category => {
  const bubble = document.createElement('div');
  bubble.className = 'category-bubble';
  bubble.textContent = `${category.emoji} ${category.name}`;
  bubble.style.animationDelay = `${Math.random() * 2}s`;
  floatingCategories.appendChild(bubble);
});

const memes = [
  { title: 'Coding Life', image: 'assets/images/meme1.jpg' },
  { title: 'Monday Mood', image: 'assets/images/meme2.jpg' }
];

const memeGrid = document.getElementById('meme-grid');

memes.forEach((meme, index) => {
  const card = document.createElement('div');
  card.className = 'meme-card';
  card.innerHTML = `
    <img src="${meme.image}" alt="${meme.title}" />
    <div class="meme-info">
      <h3>${meme.title}</h3>
      <div class="meme-actions" data-index="${index}">
        <button class="like-btn">❤️ <span class="like-count">0</span></button>
        <button class="comment-toggle">💬</button>
        <button class="share-btn">🔗</button>
      </div>
      <div class="comment-section" style="display: none;">
        <input type="text" placeholder="Write a comment..." class="comment-input" />
        <button class="comment-submit">Post</button>
        <ul class="comment-list"></ul>
      </div>
    </div>
  `;
  memeGrid.appendChild(card);
});
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
      const countSpan = button.querySelector('.like-count');
      let count = parseInt(countSpan.textContent);
      countSpan.textContent = count + 1;
    });
  });

  document.querySelectorAll('.comment-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const section = button.closest('.meme-info').querySelector('.comment-section');
      section.style.display = section.style.display === 'none' ? 'block' : 'none';
    });
  });

  document.querySelectorAll('.comment-submit').forEach(button => {
    button.addEventListener('click', () => {
      const section = button.closest('.comment-section');
      const input = section.querySelector('.comment-input');
      const list = section.querySelector('.comment-list');
      if (input.value.trim()) {
        const li = document.createElement('li');
        li.textContent = input.value;
        list.appendChild(li);
        input.value = '';
      }
    });
  });

  document.querySelectorAll('.share-btn').forEach(button => {
    button.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copied to clipboard!'))
        .catch(() => alert('Failed to copy link.'));
    });
  });
});

