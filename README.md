# Vxmedia_edit

Portfolio site for **Vxmedia_edit** — Video Editor & Motion Graphics Designer.

Plain **HTML, CSS and JavaScript**. No build step, no framework, no `npm install`.
Open `index.html` in a browser, or drop the folder onto any static host.

---

## Run it locally

Double-clicking `index.html` works for a quick look, but the project page reads
`?slug=` from the URL and some browsers restrict that over a plain `file://`
address. For the real experience, serve the folder over HTTP. Two easy ways:

```bash
# Option A — Python (already on most machines)
python3 -m http.server 8000
# then open http://localhost:8000

# Option B — Node, if you have it
npx serve .
```

No environment variables, no dependencies, nothing to install.

---

## Where to edit things

Two files hold all your content. You never need to open an HTML file.

### `js/site-data.js`

| What | Field |
| --- | --- |
| Email | `SITE.contact.email` |
| LinkedIn / Instagram / X / YouTube | `SITE.contact.socials` |
| Hero headline and intro line | `SITE.hero` |
| Availability badge | `SITE.availability` |
| About heading and paragraphs | `SITE.about` |
| Introduction video URL | `SITE.introVideo.url` |
| Six service cards | `SITE.services` |
| Skills groups | `SITE.skills` |
| Tools strip | `SITE.tools` |
| Process steps | `SITE.process` |
| "How I work" points | `SITE.principles` |
| Page title, meta description | `SITE.seo` |
| Testimonials | `TESTIMONIALS` |
| Skills page content (below) | `SKILLS_PAGE` |

Anything written as `YOUR_EMAIL`, `YOUR_LINKEDIN`, `YOUR_INTRO_VIDEO` etc. is a
placeholder. The site detects them and either hides that element or shows a
quiet note instead of printing a broken link.

### `js/projects-data.js`

Your portfolio. The array ships with six empty slots so you can see the layout;
replace them with real work.

1. Copy the commented `TEMPLATE` block near the bottom of the file.
2. Paste it into the `PROJECTS` array.
3. Fill it in and make sure `slug` is unique — it becomes the URL
   (`work/project.html?slug=your-slug`).
4. Delete any leftover `placeholder: true` entries.

A project supports: `title`, `slug`, `category`, `client`, `year`, `duration`,
`thumbnail`, `video`, `description`, `approach`, `tools`, `role`, `results`,
`gallery`.

The homepage shows the first six entries in the array; `work.html` shows all
of them with filtering.

---

## The Skills page

`skills.html` covers technical skills, specializations, achievements, and
workflow — all driven by `SKILLS_PAGE` in `js/site-data.js`:

| Section | Field | Notes |
| --- | --- | --- |
| Technical skills | `technicalSkills` | Each gets a lettered badge (`Pr`, `Ae`, `DR`…) instead of a borrowed software logo — no third-party brand assets, no licensing risk. |
| Specializations | `specializations` | Icon, title, one-line description, and up to four skill tags. |
| Achievements | `achievements` | **Real numbers only.** Every entry ships as a `YOUR_*` placeholder — the card shows "Add your number in js/site-data.js" instead of a made-up stat until you fill it in. |
| Workflow | `workflow` | Your actual step-by-step process. Add or remove steps freely — the numbering and layout adapt automatically. |
| Closing CTA | `cta` | Heading, body text, and the button label. |

Nothing here is invented for you — same rule as the rest of the site.

---

## Videos and images

**Videos** — paste any of these into `video` (or `SITE.introVideo.url`):

- YouTube: `https://youtu.be/ID`, `https://youtube.com/watch?v=ID`, or a Shorts URL
- Vimeo: `https://vimeo.com/123456789`
- Direct file: `https://…/clip.mp4` (also `.webm`, `.mov`)

Nothing loads until a visitor presses play — you get a still frame and a play
button, so a page full of projects stays fast. YouTube is embedded through
`youtube-nocookie.com`.

**Thumbnails** — leave `thumbnail: ''` and the YouTube/Vimeo still is used
automatically. To use your own, drop the file in `assets/work/` and write
`thumbnail: 'assets/work/my-file.jpg'`. Use 16:9 images, roughly 1600×900.

**Social card** — leave `SITE.seo.ogImage` empty, or point it at a 1200×630
image you've placed in `assets/`, e.g. `'assets/og.jpg'`.

**Favicon** — replace `assets/favicon.svg`.

---

## Adding a category

Add the name to the `CATEGORIES` array in `js/projects-data.js`. Filters only
appear for categories that actually contain a project, so nothing looks empty.

---

## Project structure

```
index.html               Homepage
work.html                /work — full filterable grid
work/project.html        Case-study page, reads ?slug= from the URL
skills.html               Technical skills, specializations, achievements, workflow
404.html                 Not-found page
robots.txt
sitemap.xml               Static — add a line per project slug when you add one
css/
  styles.css              All styles — tokens at the top of the file
js/
  site-data.js            ← your details
  projects-data.js        ← your portfolio
  video.js                 URL parsing and thumbnail fallbacks
  video-player.js          Click-to-load video player, shared by all pages
  work-grid.js             Project card markup + category filtering
  project-page.js           Renders work/project.html from ?slug=
  main.js                   Nav, mobile menu, scroll reveal, playhead, marquee
assets/
  favicon.svg
```

Every page loads `js/site-data.js` and `js/main.js`; pages that show projects
also load `js/projects-data.js`, `js/video.js`, `js/video-player.js` and
`js/work-grid.js`. Load order matters — copy an existing page's `<script>`
block if you add a new page.

---

## Design notes

- Near-black `#08090A` base, warm white type, one accent: tungsten amber
  `#FFB627`, with a cold steel `#7E93A6` for secondary type — the orange/teal
  grade, borrowed from colour work rather than from a UI kit.
- Archivo for everything, IBM Plex Mono reserved for real timecode and metadata.
- One signature motion idea: the page behaves like a sequence. A scrub bar and
  running timecode sit at the bottom of the viewport and track scroll position.
- Every animation is behind `prefers-reduced-motion`. Focus rings are visible,
  the mobile menu traps Escape, and there's a skip link.

To change the accent colour, edit the `:root` block at the top of
`css/styles.css` — it's one value.

---

## SEO note

Because this is plain static HTML with no server-side rendering, the project
detail page (`work/project.html?slug=…`) fills in its title, meta description
and content with JavaScript after the page loads. That's fine for people and
for search engines that execute JavaScript (Google does), but if you need
search engines to see fully-formed HTML per project without executing script,
you'd need either a static site generator or one hand-written HTML file per
project — ask if you'd like that version instead.

---

## Deploying

This is a static site — any static host works. A few options:

### Netlify / Vercel (drag-and-drop)

Drag the whole folder onto Netlify's or Vercel's deploy page. Nothing to
configure; there's no build step to run.

### Vercel CLI

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

### GitHub Pages

1. Push this folder to a GitHub repository.
2. Repository → Settings → Pages → set the source to the `main` branch, root folder.
3. Your site is live at `https://YOUR_USERNAME.github.io/REPO_NAME/`.

### Any other static host

Upload the folder as-is (FTP, S3 + CloudFront, Cloudflare Pages, etc.) — there
are no dependencies and nothing needs to be built first.

Once you have a real domain, update `SITE.url` in `js/site-data.js`, the
`https://YOUR_DOMAIN` values in `robots.txt`, `sitemap.xml`, and the
`<link rel="canonical">` tags in `index.html` and `work.html`.
