export interface FaqItem {
  answer: string;
  question: string;
}

export const faqEn: FaqItem[] = [
  {
    answer:
      'No, we are not, and will never use your data to train AI. You can find more information on our security policy.',
    question: 'Is my data used to train AI?',
  },
  {
    answer:
      'All your data is stored in EU servers (Frankfurt, Germany). You can find more information on our security policy.',
    question: 'Where is my data stored?',
  },
  {
    answer:
      'You get 200 messages for free (they do not renew) for Ask, and one month free for Forage.',
    question: 'Do you have a free trial?',
  },
];

export const faqFr: FaqItem[] = [
  {
    answer:
      "Non, nous ne le faisons pas et nous ne le ferons jamais. Vous trouverez plus d'informations sur notre politique de confidentialité.",
    question: 'Est-ce que mes données sont utilisées pour entraîner des IA?',
  },
  {
    answer:
      "Vos données sont stockées sur des serveurs en UE (Francfort, Allemagne), vous trouverez plus d'informations sur notre politique de sécurité.",
    question: 'Où sont mes données?',
  },
  {
    answer:
      'Vous avez 200 messages gratuits (ils ne se renouvellent pas) pour Ask, et un mois gratuit pour Forage.',
    question: 'Avez-vous un essai gratuit?',
  },
];
