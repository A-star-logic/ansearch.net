export const languages = {
  en: { flag: 'flagpack:gb-ukm', name: 'Rosbif' },
  fr: { flag: 'flagpack:fr', name: 'Frogs' },
};

export const defaultLang = 'en';

const en = {
  cta: 'Get a demo',
  footer: {
    banner: 'Ready to unlock the power of AI and automation?',
    company: 'Company',
    contact: 'Contact/Support',
    copyright: 'All rights reserved.',
    madeWith: 'Made with ❤️ in Edinburgh, Montpellier & Chennai',
    policies: 'Policies',
    privacy: 'Privacy',
    product: 'Product',
    products: 'Products',
    security: 'Security',
    social: 'Social',
    solutions: 'Solutions',
    subprocessors: 'Sub-processors',
    terms: 'Terms',
    tools: 'Tools',
  },
  navbar: {
    home: 'Home',
    login: 'Login',
    products: 'Products',
    solutions: 'Solutions',
    support: 'Support/Contact',
  },
  profileSelector: {
    executive: 'An Executive / Manager',
    other: 'Other',
    productManager: 'A Product Manager or Founder',
    researcher: 'A Researcher',
    title: 'You are...',
  },
  sections: {
    faq: {
      subtitle: "Can't find the answer you're looking for?",
      title: 'FAQ',
    },
    howItWorks: {
      title: 'How it works',
    },
    partners: {
      label: 'Our experience',
    },
    security: {
      caption: 'Our commitment',
      content:
        "Your data is important and sensitive, that's why Ansearch is confidential by default contrary to many other solutions!<br/><br/>Zero training, zero data shared, sovereign cloud EU or US, our teams have done a meticulous job and are always at the top of security.",
      learnMore: 'Learn more about our security',
      title: 'Confidential, transparent and secure',
    },
  },
};

const fr: typeof en = {
  ...en,
  cta: 'Voir une démo',
  footer: {
    banner: "Prêt à débloquer la puissance de l'IA et de l'automatisation?",
    company: 'Entreprise',
    contact: 'Contact/Support',
    copyright: 'Tous droits réservés.',
    madeWith: 'Fait avec ❤️ à Édimbourg, Montpellier & Chennai',
    policies: 'Politiques',
    privacy: 'Confidentialité',
    product: 'Produit',
    products: 'Produits',
    security: 'Sécurité',
    social: 'Réseaux sociaux',
    solutions: 'Solutions',
    subprocessors: 'Sous-traitants',
    terms: 'Conditions',
    tools: 'Outils',
  },
  navbar: {
    home: 'Accueil',
    login: 'Connexion',
    products: 'Produits',
    solutions: 'Solutions',
    support: 'Support/Contact',
  },
  profileSelector: {
    executive: 'Dirigeant / Cadre / Manager',
    other: 'Autre',
    productManager: 'Product Manager ou Fondateur',
    researcher: 'Chercheur',
    title: 'Vous êtes...',
  },
  sections: {
    faq: {
      subtitle: 'Vous ne trouvez pas la réponse que vous cherchez?',
      title: 'FAQ',
    },
    howItWorks: {
      title: 'Comment ça marche',
    },
    partners: {
      label: 'Notre expérience',
    },
    security: {
      caption: 'Notre engagement',
      content:
        "Vos données sont importantes et sensibles, c'est pourquoi Ansearch est confidentiel par défaut contraitement à beaucoup d'autres solutions!<br/><br/>Zéro entrainement, zéro données partagées, cloud souverain EU ou US, nos équipes ont fait un travail minutieux et sont toujours au top de la sécurité.",
      learnMore: 'En savoir plus sur notre sécurité',
      title: 'Confidentiel, transparent et sécurisé',
    },
  },
};

export const ui = {
  en,
  fr,
} as const;
