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
      "We are a young startup, talking to all our users helps us understand your needs... It's only 15 minutes of your time to make your experience better, promise!",
    question: "Do I really need to call you / can't I just sign up?",
  },
  {
    answer:
      'We are still experimenting, but for now, we have a lifetime early adopter pricing, at 12€ per month per user for Ask, and 12€ per month per user for Forage.',
    question: 'What is your pricing?',
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
      "Nous sommes une startup en plein devéloppement, parler à tout nos utilisateurs nous permet d'être sûr qu'on répond à vos besoins... Promis, c'est seulement 15 minutes d'appel!",
    question:
      "Dois-je vraiment vous appeler / je ne peux pas simplement m'inscrire?",
  },
  {
    answer:
      "Nous expérimentons encore, mais pour l'instant, nous avons un tarif exclusif à vie pour nos premiers utilisateurs, de 12€ par mois par utilisateur pour Ask, et 12€ par mois par utilisateur pour Forage.",
    question: 'Quel est votre tarif?',
  },
  {
    answer:
      'Vous avez 200 messages gratuits (ils ne se renouvellent pas) pour Ask, et un mois gratuit pour Forage.',
    question: 'Avez-vous un essai gratuit?',
  },
];
