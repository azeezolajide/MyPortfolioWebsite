/** Builds one project card's HTML — a real project, or an empty demo slot. */
function projectCardHtml(project) {
  if (project.placeholder) {
    return `
      <article class="card" data-cat="${project.category}" aria-label="Empty ${project.category} slot">
        <div class="frame placeholder">
          <span class="tc cool">${project.category}</span>
        </div>
        <div class="cardmeta">
          <h3 class="muted">Open slot</h3>
          <span class="tc">—:—</span>
        </div>
        <p class="card-desc">Add this project in <code class="cool">js/projects-data.js</code>.</p>
      </article>`;
  }

  const still = posterFor(project.thumbnail, project.video);
  const client = !isPlaceholder(project.client) ? project.client : '';
  const sub = [client, project.year].filter(Boolean).join(' / ');

  return `
    <article class="card" data-cat="${project.category}">
      <a href="${projectHref(project.slug)}">
        <div class="frame">
          ${still ? `<img src="${still}" alt="Still frame from ${escapeHtml(project.title)}" loading="lazy" />` : ''}
          <span class="scrim" aria-hidden="true"></span>
          ${project.duration ? `<span class="tc duration">${project.duration}</span>` : ''}
          <span class="underline" aria-hidden="true"></span>
        </div>
        <div class="cardmeta">
          <h3>${escapeHtml(project.title)}</h3>
          <span class="tc" style="flex-shrink:0">${project.category}</span>
        </div>
      </a>
      ${project.description ? `<p class="card-desc">${escapeHtml(project.description)}</p>` : ''}
      ${sub ? `<p class="card-sub">${escapeHtml(sub)}</p>` : ''}
    </article>`;
}

/** Path to a project's detail page from wherever the current page lives. */
function projectHref(slug) {
  const inWorkFolder = location.pathname.indexOf('/work/') > -1;
  return `${inWorkFolder ? '' : 'work/'}project.html?slug=${encodeURIComponent(slug)}`;
}

/**
 * Renders the grid + filter chips into the given containers.
 * gridEl: element for cards. filtersEl: element for chip buttons (optional).
 */
function renderWorkGrid(gridEl, filtersEl, projects) {
  gridEl.innerHTML = projects.map(projectCardHtml).join('');

  if (!filtersEl) return;

  const available = CATEGORIES.filter(
    (c) => c === 'All' || projects.some((p) => p.category === c),
  );

  filtersEl.innerHTML = available
    .map(
      (c, i) =>
        `<button class="chip" role="tab" aria-selected="${i === 0}" data-cat="${c}">${c}</button>`,
    )
    .join('');

  filtersEl.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;

    filtersEl.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-selected', 'false'));
    chip.setAttribute('aria-selected', 'true');

    const cat = chip.dataset.cat;
    gridEl.querySelectorAll('.card').forEach((card) => {
      card.hidden = cat !== 'All' && card.dataset.cat !== cat;
    });
  });
}
