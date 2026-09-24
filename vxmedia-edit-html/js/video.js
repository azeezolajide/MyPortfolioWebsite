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
  if (thumbnail && thumbnail.indexOf('YOUR_') !== 0) return thumbnail;

  const v = parseVideo(videoUrl);
  if (v.kind === 'youtube') return `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`;
  if (v.kind === 'vimeo') return `https://vumbnail.com/${v.id}.jpg`;
  return null;
}

function isPlaceholder(value) {
  return !value || value.indexOf('YOUR_') === 0;
}
