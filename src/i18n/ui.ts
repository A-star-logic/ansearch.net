export const languages = {
  en: { flag: 'flagpack:gb-ukm', name: 'Rosbif' },
  fr: { flag: 'flagpack:fr', name: 'Frogs' },
};

export const defaultLang = 'en';

const en = {
  cta: 'See Ansearch in action',
  navbar: {
    home: 'Home',
    support: 'Support/Contact',
    blog: 'Blog'
  },
};
const fr = {
  ...en, // fallback to en when the translation doesn't exist
  cta: 'Voir Ansearch en action',
  navbar: {
    home: 'Accueil',
    support: 'Support/Contact',
    blog: 'Blog'
  },
};

export const ui = {
  en,
  fr,
} as const;
