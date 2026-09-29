/**
 * Turns a YouTube / Vimeo / direct file URL into something embeddable.
 * Never throws — an unrecognised or placeholder URL just returns 'none'.
 */
const YT_RE = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/;
const VIMEO_RE = /vimeo\.com\/(?:video\/)?(\d+)/;

function parseVideo(url) {
  if (!url || url.indexOf('YOUR_') === 0) return { kind: 'none' };

  const yt = url.match(YT_RE);
  if (yt) {
    return {
      kind: 'youtube',
      id: yt[1],
      embed: `https://www.youtube-nocookie.com/embed/${yt[1]}?rel=0&modestbranding=1`,
    };
  }

  const vm = url.match(VIMEO_RE);
  if (vm) {
    return { kind: 'vimeo', id: vm[1], embed: `https://player.vimeo.com/video/${vm[1]}` };
  }

  if (/\.(mp4|webm|mov)(\?.*)?$/i.test(url)) return { kind: 'file', src: url };

  return { kind: 'none' };
}

/** Falls back to the platform's own thumbnail when no image is supplied. */
function posterFor(thumbnail, videoUrl) {
  if (thumbnail && thumbnail.indexOf('YOUR_') !== 0) return resolveAsset(thumbnail);

  const v = parseVideo(videoUrl);
  if (v.kind === 'youtube') return `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`;
  if (v.kind === 'vimeo') return `https://vumbnail.com/${v.id}.jpg`;
  return null;
}

function isPlaceholder(value) {
  return !value || value.indexOf('YOUR_') === 0;
}

/**
 * All image/asset paths in js/site-data.js and js/projects-data.js are
 * written as if from the site root (e.g. 'assets/work/frame-01.jpg'), since
 * that's the simplest thing to type. But work/project.html actually lives
 * one folder deep, so a root-relative path needs a '../' prefix there.
 * This resolves that automatically — nothing to think about when editing
 * the data files. Absolute URLs (https://…) and data: URIs pass through
 * untouched.
 */
function resolveAsset(path) {
  if (!path) return path;
  if (/^([a-z][a-z0-9+.-]*:)?\/\//i.test(path) || path.startsWith('data:') || path.startsWith('/')) {
    return path;
  }
  const inWorkFolder = location.pathname.indexOf('/work/') > -1;
  return inWorkFolder ? `../${path}` : path;
}