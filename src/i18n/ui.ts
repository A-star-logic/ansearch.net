export const languages = {
  en: { flag: 'flagpack:gb-ukm', name: 'Rosbif' },
  fr: { flag: 'flagpack:fr', name: 'Frogs' },
};

export const defaultLang = 'en';

const en = {
  cta: 'Get a demo',
  profileSelector: {
    title: 'You are...',
    productManager: 'A Product Manager or Founder',
    researcher: 'A Researcher',
    executive: 'An Executive / Manager',
    other: 'Other',
  },
  navbar: {
    home: 'Home',
    products: 'Products',
    solutions: 'Solutions',
    support: 'Support/Contact',
    login: 'Login',
  },
  sections: {
    partners: {
      label: 'Our experience',
    },
    howItWorks: {
      title: 'How it works',
    },
    faq: {
      title: 'FAQ',
      subtitle: "Can't find the answer you're looking for?",
    },
    security: {
      caption: 'Our commitment',
      title: 'Confidential, transparent and secure',
      content:
        "Your data is important and sensitive, that's why Ansearch is confidential by default contrary to many other solutions!<br/><br/>Zero training, zero data shared, sovereign cloud EU or US, our teams have done a meticulous job and are always at the top of security.",
      learnMore: 'Learn more about our security',
    },
  },
  footer: {
    banner: 'Ready to unlock the power of AI and automation?',
    company: 'Company',
    product: 'Product',
    contact: 'Contact/Support',
    products: 'Products',
    solutions: 'Solutions',
    policies: 'Policies',
    terms: 'Terms',
    security: 'Security',
    privacy: 'Privacy',
    subprocessors: 'Sub-processors',
    social: 'Social',
    tools: 'Tools',
    copyright: 'All rights reserved.',
    madeWith: 'Made with ❤️ in Edinburgh, Montpellier & Chennai',
  },
};

const fr: typeof en = {
  ...en,
  cta: 'Voir une démo',
  profileSelector: {
    title: 'Vous êtes...',
    productManager: 'Product Manager ou Fondateur',
    researcher: 'Chercheur',
    executive: 'Dirigeant / Cadre / Manager',
    other: 'Autre',
  },
  navbar: {
    home: 'Accueil',
    products: 'Produits',
    solutions: 'Solutions',
    support: 'Support/Contact',
    login: 'Connexion',
  },
  sections: {
    partners: {
      label: 'Notre expérience',
    },
    howItWorks: {
      title: 'Comment ça marche',
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Vous ne trouvez pas la réponse que vous cherchez?',
    },
    security: {
      caption: 'Notre engagement',
      title: 'Confidentiel, transparent et sécurisé',
      content:
        "Vos données sont importantes et sensibles, c'est pourquoi Ansearch est confidentiel par défaut contraitement à beaucoup d'autres solutions!<br/><br/>Zéro entrainement, zéro données partagées, cloud souverain EU ou US, nos équipes ont fait un travail minutieux et sont toujours au top de la sécurité.",
      learnMore: 'En savoir plus sur notre sécurité',
    },
  },
  footer: {
    banner: "Prêt à débloquer la puissance de l'IA et de l'automatisation?",
    company: 'Entreprise',
    product: 'Produit',
    contact: 'Contact/Support',
    products: 'Produits',
    solutions: 'Solutions',
    policies: 'Politiques',
    terms: 'Conditions',
    security: 'Sécurité',
    privacy: 'Confidentialité',
    subprocessors: 'Sous-traitants',
    social: 'Réseaux sociaux',
    tools: 'Outils',
    copyright: 'Tous droits réservés.',
    madeWith: 'Fait avec ❤️ à Édimbourg, Montpellier & Chennai',
  },
};

export const ui = {
  en,
  fr,
} as const;
