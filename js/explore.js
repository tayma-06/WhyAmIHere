const categories = [
  { name: 'Nibba-Nibbi', emoji: '🧒🏻' },
  { name: 'Dad Jokes', emoji: '👨‍🦳' },
  { name: 'Anime Memes', emoji: '🍥' },
  { name: 'Tech Humor', emoji: '💻' },
  { name: 'Food Funnies', emoji: '🍔' },
  { name: 'Animals', emoji: '🐸' }
];

const memes = {
  'Nibba-Nibbi': [
    { img: 'assets/images/nibba1.jpg' },
    { img: 'assets/images/nibba2.jpg' }
  ],
  'Dad Jokes': [
    { img: 'assets/images/dad1.jpeg' },
    { img: 'assets/images/dad2.png' }
  ],
  'Anime Memes': [
    { img: 'assets/images/anime1.jpg' },
    { img: 'assets/images/anime2.jpg' }
  ],
  'Tech Humor': [
    { img: 'assets/images/tech1.jpg' },
    { img: 'assets/images/tech2.png' }
  ],
  'Food Funnies': [
    { img: 'assets/images/food1.jpg' },
    { img: 'assets/images/food2.jpg' }
  ],
  'Animals': [
    { img: 'assets/images/animal1.jpg' },
    { img: 'assets/images/animal2.jpg' }
  ]
};

const floatingCategories = document.getElementById('floating-categories');
const previewSection = document.getElementById('category-preview');

// Load Category Bubbles
categories.forEach(cat => {
  const bubble = document.createElement('div');
  bubble.className = 'category-bubble';
  bubble.innerHTML = `${cat.emoji} ${cat.name}`;
  bubble.addEventListener('click', () => loadCategory(cat.name));
  floatingCategories.appendChild(bubble);
});

// Load Preview Memes
function loadCategory(name) {
  previewSection.innerHTML = `<h2>${name}</h2><div class="preview-grid"></div>`;
  const grid = previewSection.querySelector('.preview-grid');

  memes[name].forEach(meme => {
    const card = document.createElement('div');
    card.className = 'preview-card';
    card.innerHTML = `<img src="${meme.img}" alt="${name} meme">`;
    grid.appendChild(card);
  });
}

// Theme Toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  toggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});
