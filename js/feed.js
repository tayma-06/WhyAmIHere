const memes = [
  { title: 'Monday Mood', image: 'assets/images/meme2.jpg' },
  { title: 'Coding Life', image: 'assets/images/meme1.jpg' },
  { title: '404 Brain Not Found', image: 'assets/images/meme3.jpg' }
];

const feedGrid = document.getElementById('feed-grid');

// Render meme cards
memes.forEach((meme, index) => {
  const card = document.createElement('div');
  card.className = 'meme-card';
  card.innerHTML = `
    <img src="${meme.image}" alt="${meme.title}">
    <div class="meme-info">
      <h3>${meme.title}</h3>
      <div class="meme-actions">
        <button class="like-btn">❤️ <span class="like-count">0</span></button>
        <button class="comment-toggle">💬</button>
        <button class="share-btn">🔗</button>
      </div>
      <div class="comment-section">
        <input type="text" class="comment-input" placeholder="Say something funny..."/>
        <button class="comment-submit">Post</button>
        <ul class="comment-list"></ul>
      </div>
    </div>
  `;
  feedGrid.appendChild(card);
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Like, Comment, Share
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('like-btn')) {
    const countSpan = e.target.querySelector('.like-count');
    countSpan.textContent = parseInt(countSpan.textContent) + 1;
  }

  if (e.target.classList.contains('comment-toggle')) {
    const section = e.target.closest('.meme-info').querySelector('.comment-section');
    section.style.display = section.style.display === 'block' ? 'none' : 'block';
  }

  if (e.target.classList.contains('comment-submit')) {
    const section = e.target.closest('.comment-section');
    const input = section.querySelector('.comment-input');
    const list = section.querySelector('.comment-list');
    if (input.value.trim()) {
      const li = document.createElement('li');
      li.textContent = input.value;
      list.appendChild(li);
      input.value = '';
    }
  }

  if (e.target.classList.contains('share-btn')) {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  }
});
