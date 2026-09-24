/**
 * Renders /work/project.html?slug=your-slug from PROJECTS in
 * js/projects-data.js. Runs after main.js's DOMContentLoaded, so the nav
 * and footer are already built by the time this fires.
 */
document.addEventListener('DOMContentLoaded', () => {
  const slug = new URLSearchParams(location.search).get('slug');
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    document.getElementById('project-missing').hidden = false;
    return;
  }

  renderProject(project);
  document.getElementById('project-view').hidden = false;
  wireScrollReveal();
});

function renderProject(project) {
  document.title = `${project.title} — Vxmedia_edit`;
  const descTag = document.getElementById('page-description');
  if (project.description) descTag.setAttribute('content', project.description);

  document.querySelector('#p-title span').textContent = project.title;

  if (project.description) {
    const d = document.getElementById('p-description');
    d.textContent = project.description;
    d.hidden = false;
  }

  renderVideoPlayer(document.getElementById('p-video'), {
    url: project.video,
    poster: project.thumbnail,
    title: project.title,
  });

  const meta = [
    ['Client', project.client],
    ['Year', project.year],
    ['Role', project.role],
    ['Duration', project.duration],
    ['Category', project.category],
  ].filter(([, value]) => value && !isPlaceholder(value));

  if (meta.length > 0) {
    const metaEl = document.getElementById('p-meta');
    metaEl.hidden = false;
    metaEl.innerHTML = meta
      .map(([label, value]) => `<div><dt>${label}</dt><dd>${escapeHtml(value)}</dd></div>`)
      .join('');
  }

  if (project.approach) {
    document.getElementById('p-approach').hidden = false;
    document.getElementById('p-approach-text').textContent = project.approach;
  }

  if (project.results && project.results.length > 0) {
    document.getElementById('p-results').hidden = false;
    document.getElementById('p-results-list').innerHTML = project.results
      .map((r) => `<li>${escapeHtml(r)}</li>`)
      .join('');
  }

  if (project.tools && project.tools.length > 0) {
    document.getElementById('p-tools').hidden = false;
    document.getElementById('p-tools-list').innerHTML = project.tools
      .map((t) => `<li>${escapeHtml(t)}</li>`)
      .join('');
  }

  if (project.gallery && project.gallery.length > 0) {
    const galleryEl = document.getElementById('p-gallery');
    galleryEl.hidden = false;
    galleryEl.innerHTML = project.gallery
      .map(
        (src, i) =>
          `<img src="${src}" alt="${escapeHtml(project.title)} — frame ${i + 1}" loading="lazy" />`,
      )
      .join('');
  }

  const { prev, next } = getAdjacent(project.slug);
  if (prev && next && LIVE_PROJECTS.length > 1) {
    const nav = document.getElementById('p-prevnext');
    nav.hidden = false;
    nav.innerHTML = `
      <a href="project.html?slug=${encodeURIComponent(prev.slug)}">
        <span class="tc">Previous</span>
        <span class="title">${escapeHtml(prev.title)}</span>
      </a>
      <a class="next" href="project.html?slug=${encodeURIComponent(next.slug)}">
        <span class="tc">Next</span>
        <span class="title">${escapeHtml(next.title)}</span>
      </a>`;
  }
}
