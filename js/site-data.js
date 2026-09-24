/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE FIRST.
 *  Everything about you — name, email, socials, copy, services,
 *  skills and tools — lives here. No HTML file needs touching.
 *  Anything still written as YOUR_SOMETHING is a placeholder.
 * ─────────────────────────────────────────────────────────────
 */

const SITE = {
  brand: 'Vxmedia_edit',
  title: 'Video Editor & Motion Graphics Designer',
  longTitle: 'Creative Video Editor | Motion Designer | Visual Storyteller',

  /** Used for canonical links and social cards. Include the trailing domain only, no slash. */
  url: 'https://YOUR_DOMAIN',

  availability: 'Available for freelance & remote work',

  seo: {
    title: 'Vxmedia_edit — Video Editor & Motion Graphics Designer',
    description:
      'Vxmedia_edit is a Video Editor and Motion Graphics Designer creating engaging visual stories, motion graphics, brand animations, and digital content.',
    /** Leave empty to skip the tag. Or point at a 1200x630 image, e.g. 'assets/og.jpg'. */
    ogImage: '',
  },

  /** Replace every placeholder below with your real details. */
  contact: {
    email: 'YOUR_EMAIL',
    socials: [
      { label: 'LinkedIn', href: 'YOUR_LINKEDIN' },
      { label: 'Instagram', href: 'YOUR_INSTAGRAM' },
      { label: 'X', href: 'YOUR_X_PROFILE' },
      { label: 'YouTube', href: 'YOUR_YOUTUBE' },
    ],
  },

  nav: [
    { label: 'Home', href: 'index.html' },
    { label: 'Work', href: 'work.html' },
    { label: 'Skills', href: 'skills.html' },
    { label: 'About', href: 'index.html#about' },
    { label: 'Services', href: 'index.html#services' },
    { label: 'Contact', href: 'index.html#contact' },
  ],

  hero: {
    line1: 'Video Editor',
    line2: '& Motion Designer',
    intro:
      'I turn ideas, raw footage, and concepts into engaging visual stories through editing, motion graphics, and creative storytelling.',
  },

  about: {
    heading: 'I turn ideas into visual stories.',
    body: [
      'I’m a Video Editor and Motion Graphics Designer focused on creating engaging visual content for brands, businesses, creators, and digital products.',
      'My work combines editing, motion design, storytelling, typography, sound, and visual composition to create content that communicates clearly and keeps people watching.',
    ],
  },

  /**
   * Your introduction video. Paste a YouTube, Vimeo or .mp4 URL.
   * Leave it as YOUR_INTRO_VIDEO and a placeholder frame is shown instead.
   */
  introVideo: {
    heading: 'Let’s create something worth watching.',
    body: 'Watch my introduction to learn more about my creative approach, skills, and the kind of work I create.',
    url: 'YOUR_INTRO_VIDEO',
    poster: '', // optional: 'assets/intro-poster.jpg'
  },

  services: [
    { title: 'Video Editing', body: 'Engaging edits with strong pacing, clean transitions, sound design, and storytelling.' },
    { title: 'Motion Graphics', body: 'Dynamic animations that make information and ideas easier to understand and remember.' },
    { title: 'Talking Head Videos', body: 'Professional editing for personal brands, creators, executives, and businesses.' },
    { title: 'Brand Animation', body: 'Logo animation, typography, visual identity motion, and branded content.' },
    { title: 'Short-Form Content', body: 'Engaging Reels, TikToks, YouTube Shorts, and social media videos.' },
    { title: 'Visual Storytelling', body: 'Combining editing, motion, sound, and composition to communicate ideas clearly.' },
  ],

  /** Delete anything you don't actually do. Nothing here is claimed for you. */
  skills: [
    { group: 'Video Editing', items: ['Premiere Pro', 'DaVinci Resolve'] },
    { group: 'Motion Design', items: ['After Effects', 'Motion Graphics', 'Typography Animation', 'Brand Animation'] },
    { group: 'Creative', items: ['Visual Storytelling', 'Pacing', 'Composition', 'Sound Design', 'Colour', 'Transitions', 'Content Creation'] },
  ],

  /** Shown in the scrolling tools strip. Remove any you don't use. */
  tools: [
    'Adobe Premiere Pro',
    'Adobe After Effects',
    'DaVinci Resolve',
    'Photoshop',
    'Illustrator',
    'Cinema 4D',
    'AI creative tools',
  ],

  process: [
    { step: 'Understand', body: 'Understand the message, audience, brand, and objective.' },
    { step: 'Plan', body: 'Develop the visual direction, structure, pacing, and storytelling approach.' },
    { step: 'Create', body: 'Edit footage, build motion graphics, design transitions, sound, and visual elements.' },
    { step: 'Refine', body: 'Polish the details, improve pacing, review feedback, and prepare the final delivery.' },
  ],

  principles: {
    heading: 'Creative thinking. Precise execution.',
    items: [
      { title: 'Story first', body: 'Every edit should serve the message.' },
      { title: 'Detail driven', body: 'Small details make a big difference.' },
      { title: 'Brand conscious', body: 'The content should feel consistent with the brand.' },
      { title: 'Clear communication', body: 'Projects move better when communication is simple and direct.' },
    ],
  },
};

/**
 * Testimonials. Empty by default — the section hides itself until you add one.
 * Add entries in this shape:
 *   { name: 'Jane Doe', company: 'Acme', position: 'Head of Marketing',
 *     quote: '…', image: 'assets/testimonials/jane.jpg' }
 */
const TESTIMONIALS = [];

/**
 * ─────────────────────────────────────────────────────────────
 *  skills.html content. Everything here follows the same rule as
 *  the rest of the site: nothing is invented for you. Achievement
 *  numbers are placeholders (YOUR_*) until you fill in the real ones —
 *  the page shows an editing hint instead of a made-up stat.
 * ─────────────────────────────────────────────────────────────
 */
const SKILLS_PAGE = {
  heading: 'My skills & expertise',
  intro:
    'A closer look at the tools I edit with, the kind of content I specialize in, and how a project moves from raw footage to final delivery.',

  /** Software you actually use. A short badge with initials replaces a
   *  borrowed brand logo — clean, and nothing here is someone else's IP. */
  technicalSkills: [
    { code: 'Pr', name: 'Premiere Pro', body: 'Editing, multicam sync, pacing and structure.' },
    { code: 'Ae', name: 'After Effects', body: 'Motion graphics, visual effects, and animation.' },
    { code: 'DR', name: 'DaVinci Resolve', body: 'Color grading and audio post-production.' },
    { code: 'Ps', name: 'Photoshop', body: 'Thumbnails, graphics, and image compositing.' },
    { code: 'Ai', name: 'Illustrator', body: 'Vector assets and typography for motion work.' },
    { code: 'C4D', name: 'Cinema 4D', body: '3D elements and dimensional motion design.' },
  ],

  /** The kinds of projects you take on. Tags reuse the same skill language
   *  as the rest of the site, so nothing here contradicts your Skills section. */
  specializations: [
    {
      icon: '🎬',
      title: 'YouTube & Long-Form Editing',
      body: 'Full-length edits built around pacing, structure, and retention.',
      tags: ['Pacing', 'Sound Design', 'Story Structure', 'Colour'],
    },
    {
      icon: '📱',
      title: 'Short-Form & Social Content',
      body: 'Reels, TikToks and Shorts cut for vertical, fast-attention viewing.',
      tags: ['Vertical Video', 'Fast Cuts', 'Captions', 'Hook-First Editing'],
    },
    {
      icon: '✨',
      title: 'Motion Graphics & Animation',
      body: 'Animated graphics that make ideas easier to follow and remember.',
      tags: ['Typography Animation', '2D Animation', 'Kinetic Type', 'Transitions'],
    },
    {
      icon: '🏷️',
      title: 'Brand Animation',
      body: 'Logo animation and motion identity that stays consistent with the brand.',
      tags: ['Logo Animation', 'Brand Consistency', 'Visual Identity', 'Composition'],
    },
    {
      icon: '📚',
      title: 'Explainer Videos',
      body: 'Turning a complex idea into something simple to watch and understand.',
      tags: ['Visual Storytelling', 'Simplification', 'Screen Recording', 'Clarity'],
    },
    {
      icon: '🎙️',
      title: 'Talking Head & Personal Brand',
      body: 'Clean edits for creators, executives and personal brand content.',
      tags: ['Jump Cuts', 'Audio Cleanup', 'B-Roll Pacing', 'On-Brand Look'],
    },
  ],

  /**
   * Real numbers only. Replace every YOUR_* value — the page shows an
   * editing hint instead of the stat until you do.
   */
  achievements: [
    { value: 'YOUR_PROJECT_COUNT', label: 'Projects completed' },
    { value: 'YOUR_CLIENT_COUNT', label: 'Clients worked with' },
    { value: 'YOUR_EXPERIENCE_YEARS', label: 'Years of experience' },
    { value: 'YOUR_TURNAROUND_TIME', label: 'Typical turnaround' },
  ],

  /** How a project actually moves, start to finish. */
  workflow: [
    { title: 'Project Analysis', body: 'Understanding the brief, the audience, and the goal.' },
    { title: 'Content Review', body: 'Reviewing raw footage and planning the edit.' },
    { title: 'Rough Cut', body: 'Building the first pass — structure, cuts, and pacing.' },
    { title: 'Fine Tuning', body: 'Adding graphics, colour, sound design, and effects.' },
    { title: 'Client Review', body: 'Sharing the edit and folding in feedback.' },
    { title: 'Final Delivery', body: 'Exporting and delivering in the formats you need.' },
  ],

  cta: {
    heading: 'Ready to work together?',
    body: 'Let’s talk about your project and figure out the right approach for it.',
    button: 'Start your project',
  },
};
