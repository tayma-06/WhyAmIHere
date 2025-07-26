// Dummy data for now
const myMemes = [
  { title: "Sleep Cycle", image: "assets/images/meme1.jpg" },
  { title: "Relatable Coding", image: "assets/images/meme2.jpg" },
];

const savedMemes = [
  { title: "Cat Logic", image: "assets/images/meme3.jpg" },
  { title: "Zoom Life", image: "assets/images/meme4.jpg" },
];

function renderMemes(memes, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // clear previous
  memes.forEach(meme => {
    const div = document.createElement('div');
    div.className = 'meme-card';
    div.innerHTML = `
      <img src="${meme.image}" alt="${meme.title}">
      <div class="meme-info">
        <h4>${meme.title}</h4>
        <div class="meme-actions">
          <button>❤️</button>
          <button>💬</button>
          <button>🔗</button>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

renderMemes(myMemes, "my-memes");
renderMemes(savedMemes, "saved-memes");
