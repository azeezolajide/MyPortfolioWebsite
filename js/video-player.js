/**
 * Renders a click-to-play video player into `container` (a DOM element).
 * Nothing loads — no iframe, no autoplay — until the visitor presses play.
 */
function renderVideoPlayer(container, { url, poster, title, emptyHint }) {
  const source = parseVideo(url);
  const still = posterFor(poster, url);

  if (source.kind === 'none') {
    container.innerHTML = `
      <div class="player empty">
        <span class="play" aria-hidden="true">${playIconSvg()}</span>
        <p class="muted" style="font-size:.875rem;max-width:38ch">
          ${emptyHint || 'Add a YouTube, Vimeo or .mp4 URL to show your video here.'}
        </p>
      </div>`;
    return;
  }

  container.innerHTML = `
    <div class="player">
      <button type="button" class="play-trigger" aria-label="Play ${escapeHtml(title)}">
        ${still ? `<img class="poster" src="${still}" alt="" loading="lazy" />` : ''}
        <span class="scrim" aria-hidden="true"></span>
        <span class="play" aria-hidden="true">${playIconSvg()}</span>
      </button>
    </div>`;

  const playerEl = container.querySelector('.player');
  const trigger = container.querySelector('.play-trigger');

  trigger.addEventListener('click', () => {
    if (source.kind === 'file') {
      playerEl.innerHTML = `
        <video src="${source.src}" ${still ? `poster="${still}"` : ''} controls autoplay playsinline></video>`;
      return;
    }

    const sep = source.embed.indexOf('?') > -1 ? '&' : '?';
    playerEl.innerHTML = `
      <iframe
        src="${source.embed}${sep}autoplay=1"
        title="${escapeHtml(title)}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`;
  });
}

function playIconSvg() {
  return `<svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor" aria-hidden="true"><path d="M0 0l16 9L0 18z"/></svg>`;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}
