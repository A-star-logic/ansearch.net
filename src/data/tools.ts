// Data for the "Can I Trust" tool - to be used when the page is ready

export interface Tool {
  description: string;
  EUHostingOption: number;
  hasRetention: number;
  isPriceListedWithoutTraining: number;
  isTrainingOnData: number;
  tag: string;
  url: string;
}

export const tools: { [key: string]: Tool } = {
  Ansearch: {
    description: 'We made ansearch ;)',
    EUHostingOption: 5,
    hasRetention: 5,
    isPriceListedWithoutTraining: 5,
    isTrainingOnData: 4,
    tag: 'Chatbot',
    url: 'https://ansearch.net',
  },
  'Anthropic API': {
    description:
      'The API from Anthropic serve multiple variations of Claude, a general purpose LLM.',
    EUHostingOption: 3,
    hasRetention: 3,
    isPriceListedWithoutTraining: 5,
    isTrainingOnData: 3,
    tag: 'API',
    url: 'https://www.claude.com/platform/api',
  },
  'Anthropic Claude': {
    description: 'Claude chat, a business and developer oriented chatbot',
    EUHostingOption: 2,
    hasRetention: 1,
    isPriceListedWithoutTraining: 5,
    isTrainingOnData: 2,
    tag: 'Chatbot',
    url: 'https://www.anthropic.com/claude',
  },
  AssemblyAI: {
    description:
      'AssemblyAI is a service that can transcribe and transcribe audio and video files.',
    EUHostingOption: 4,
    hasRetention: 4,
    isPriceListedWithoutTraining: 0,
    isTrainingOnData: 2,
    tag: 'API',
    url: 'https://www.assemblyai.com/',
  },
  'AWS Bedrock': {
    description: 'AWS Bedrock is a service that can host multiple AI models',
    EUHostingOption: 4,
    hasRetention: 5,
    isPriceListedWithoutTraining: 5,
    isTrainingOnData: 4,
    tag: 'API',
    url: 'https://aws.amazon.com/bedrock/',
  },
  'Cloudflare AI': {
    description:
      'Cloudflare AI is a service that can host multiple Open and closed source models on the edge.',
    EUHostingOption: 1,
    hasRetention: 5,
    isPriceListedWithoutTraining: 5,
    isTrainingOnData: 4,
    tag: 'API',
    url: 'https://developers.cloudflare.com/workers-ai/',
  },
  Deepgram: {
    description:
      'Deepgram is a service that can transcribe and transcribe audio and video files.',
    EUHostingOption: 4,
    hasRetention: 4,
    isPriceListedWithoutTraining: 0,
    isTrainingOnData: 2,
    tag: 'API',
    url: 'https://www.deepgram.com/',
  },
  'OpenAI API': {
    description:
      'The API from OpenAI serve multiple LLMs, including GPT, a general purpose LLM.',
    EUHostingOption: 2,
    hasRetention: 3,
    isPriceListedWithoutTraining: 5,
    isTrainingOnData: 3,
    tag: 'API',
    url: 'https://openai.com/api/',
  },
  Soniox: {
    description:
      'Soniox is a service that can transcribe and transcribe audio and video files.',
    EUHostingOption: 1,
    hasRetention: 5,
    isPriceListedWithoutTraining: 5,
    isTrainingOnData: 4,
    tag: 'API',
    url: 'https://www.soniox.com/',
  },
  Speechmatics: {
    description:
      'Speechmatics is a service that can transcribe and transcribe audio and video files.',
    EUHostingOption: 5,
    hasRetention: 4,
    isPriceListedWithoutTraining: 3,
    isTrainingOnData: 3,
    tag: 'API',
    url: 'https://www.speechmatics.com/',
  },
};
