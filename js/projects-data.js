/**
 * ─────────────────────────────────────────────────────────────
 *  YOUR PORTFOLIO LIVES HERE.
 *
 *  Every card on the homepage and work.html, and every case-study
 *  view at project.html?slug=..., is generated from this array.
 *  To add a project, copy the template block near the bottom of
 *  this file, fill it in, and delete `placeholder: true`.
 *
 *  Thumbnails:
 *    • Leave `thumbnail` empty and a YouTube/Vimeo URL will supply one.
 *    • Or drop an image in /assets/work/ and use 'assets/work/my-file.jpg'.
 *
 *  Videos: YouTube, Vimeo, or a direct .mp4 URL all work.
 * ─────────────────────────────────────────────────────────────
 */

const CATEGORIES = [
  'All',
  'Motion Graphics',
  'Video Editing',
  'Talking Head',
  'Short Form',
  'Explainer',
  'Brand Animation',
  'AI Video',
  'Social Content',
];

/**
 * Project shape (JS has no types, so here's the reference):
 * {
 *   title, slug, category,
 *   client, year, duration,        // optional display metadata
 *   thumbnail, video,              // media
 *   description, approach,         // copy
 *   tools: [], role, results: [],  // case-study detail
 *   gallery: [],                   // extra images
 *   placeholder: true              // marks an empty demo slot — delete when filled in
 * }
 */

const PROJECTS = [
  { title: 'SaaS Product Explainer',
  slug: 'saas-product-explainer',        // becomes project.html?slug=saas-product-explainer
  category: 'Motion Graphics',
  client: 'YOUR_CLIENT',
  year: '2024',
  duration: '1:12',
  thumbnail: '',                         // '' = derived from the video URL
  video: 'https://player.vimeo.com/video/1166916370',           // e.g. https://youtu.be/xxxxxxxxxxx
  description:
    'A motion-led product video designed to explain a SaaS product in a simple and engaging way.',
  approach:
    'Two or three sentences on the brief, the visual direction you chose, and why.',
  tools: ['After Effects', 'Premiere Pro'],
  role: 'Video Editor / Motion Designer',
  results: ['The video was used for promotional advertisement on linkedin', 'What it helped the client do'],
  gallery: ['/cap.jpg', '/cap.jpg']
   },

  { title: 'LATRIXCRM',
  slug: 'promotional-video',        // becomes project.html?slug=saas-product-explainer
  category: 'Motion Graphics',
  client: 'LATRIXCRM TEAM',
  year: '2025',
  duration: '57 seconds',
  thumbnail: '',                         // '' = derived from the video URL
  video: 'https://player.vimeo.com/video/1163940383',           // e.g. https://youtu.be/xxxxxxxxxxx
  description:
    'A motion-led product video designed to explain a SaaS product in a simple and engaging way.',
  approach:
    'I planned on editing it in 3 weeks.',
  tools: ['After Effects', 'Illustrator'],
  role: 'Video Editor / Motion Designer',
  results: ['The video was used for promotional advertisement on linkedin and youtube', 'What it helped the client do'],
  gallery: ['/cap.jpg', '/cap.jpg'] },

  { title: 'GEMINI',
  slug: 'promotionalVideo-Edit',        // becomes project.html?slug=saas-product-explainer
  category: 'Video Editing',
  client: 'GEMINI TEAM',
  year: '2025',
  duration: '5760 seconds',
  thumbnail: '',                         // '' = derived from the video URL
  video: 'https://player.vimeo.com/video/1163948634',           // e.g. https://youtu.be/xxxxxxxxxxx
  description:
    'A motion-led product video designed to explain a SaaS product in a simple and engaging way.',
  approach:
    'I planned on editing it in 2 weeks.',
  tools: ['After Effects', 'Illustrator, CapCut'],
  role: 'Video Editor / Motion Designer',
  results: ['The video was used for promotional advertisement on linkedin and youtube', 'What it helped the client do'],
  gallery: ['/cap.jpg', '/cap.jpg'] },
  { title: 'Open slot', slug: 'slot-03', category: 'Short Form', placeholder: true },
  { title: 'Open slot', slug: 'slot-04', category: 'Talking Head', placeholder: true },
  { title: 'Open slot', slug: 'slot-05', category: 'Brand Animation', placeholder: true },
  { title: 'Open slot', slug: 'slot-06', category: 'Explainer', placeholder: true },
];

/*
──────────────────────────────────────────────────────────────
TEMPLATE — copy this, paste it into the array above, fill it in.
The shape below is a structural example only, not a real project.

{
  title: 'SaaS Product Explainer',
  slug: 'saas-product-explainer',        // becomes project.html?slug=saas-product-explainer
  category: 'Motion Graphics',
  client: 'YOUR_CLIENT',
  year: '2026',
  duration: '1:12',
  thumbnail: '',                         // '' = derived from the video URL
  video: 'YOUR_PROJECT_VIDEO',           // e.g. https://youtu.be/xxxxxxxxxxx
  description:
    'A motion-led product video designed to explain a SaaS product in a simple and engaging way.',
  approach:
    'Two or three sentences on the brief, the visual direction you chose, and why.',
  tools: ['After Effects', 'Premiere Pro'],
  role: 'Video Editor / Motion Designer',
  results: ['What the video was used for', 'What it helped the client do'],
  gallery: ['assets/work/frame-01.jpg', 'assets/work/frame-02.jpg'],
},
──────────────────────────────────────────────────────────────
*/

const LIVE_PROJECTS = PROJECTS.filter((p) => !p.placeholder);

function getProject(slug) {
  return LIVE_PROJECTS.find((p) => p.slug === slug);
}

function getAdjacent(slug) {
  const i = LIVE_PROJECTS.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: LIVE_PROJECTS[(i - 1 + LIVE_PROJECTS.length) % LIVE_PROJECTS.length],
    next: LIVE_PROJECTS[(i + 1) % LIVE_PROJECTS.length],
  };
}
