// Data for the "Can I Trust" tool - to be used when the page is ready

export interface Tool {
  url: string;
  description: string;
  tag: string;
  isPriceListedWithoutTraining: number;
  isTrainingOnData: number;
  EUHostingOption: number;
  hasRetention: number;
}

export const tools: Record<string, Tool> = {
  Ansearch: {
    url: 'https://ansearch.net',
    description: 'We made ansearch ;)',
    tag: 'Chatbot',
    isPriceListedWithoutTraining: 5,
    isTrainingOnData: 4,
    hasRetention: 5,
    EUHostingOption: 5,
  },
  'Anthropic API': {
    url: 'https://www.claude.com/platform/api',
    description:
      'The API from Anthropic serve multiple variations of Claude, a general purpose LLM.',
    tag: 'API',
    isPriceListedWithoutTraining: 5,
    isTrainingOnData: 3,
    hasRetention: 3,
    EUHostingOption: 3,
  },
  'Anthropic Claude': {
    url: 'https://www.anthropic.com/claude',
    description: 'Claude chat, a business and developer oriented chatbot',
    tag: 'Chatbot',
    isPriceListedWithoutTraining: 5,
    isTrainingOnData: 2,
    hasRetention: 1,
    EUHostingOption: 2,
  },
  'OpenAI API': {
    url: 'https://openai.com/api/',
    description:
      'The API from OpenAI serve multiple LLMs, including GPT, a general purpose LLM.',
    tag: 'API',
    isPriceListedWithoutTraining: 5,
    isTrainingOnData: 3,
    hasRetention: 3,
    EUHostingOption: 2,
  },
  'AWS Bedrock': {
    url: 'https://aws.amazon.com/bedrock/',
    description: 'AWS Bedrock is a service that can host multiple AI models',
    tag: 'API',
    isPriceListedWithoutTraining: 5,
    isTrainingOnData: 4,
    EUHostingOption: 4,
    hasRetention: 5,
  },
  AssemblyAI: {
    url: 'https://www.assemblyai.com/',
    description:
      'AssemblyAI is a service that can transcribe and transcribe audio and video files.',
    tag: 'API',
    isPriceListedWithoutTraining: 0,
    isTrainingOnData: 2,
    EUHostingOption: 4,
    hasRetention: 4,
  },
  Deepgram: {
    url: 'https://www.deepgram.com/',
    description:
      'Deepgram is a service that can transcribe and transcribe audio and video files.',
    tag: 'API',
    isPriceListedWithoutTraining: 0,
    isTrainingOnData: 2,
    EUHostingOption: 4,
    hasRetention: 4,
  },
  Speechmatics: {
    url: 'https://www.speechmatics.com/',
    description:
      'Speechmatics is a service that can transcribe and transcribe audio and video files.',
    tag: 'API',
    isPriceListedWithoutTraining: 3,
    isTrainingOnData: 3,
    EUHostingOption: 5,
    hasRetention: 4,
  },
  Soniox: {
    url: 'https://www.soniox.com/',
    description:
      'Soniox is a service that can transcribe and transcribe audio and video files.',
    tag: 'API',
    isPriceListedWithoutTraining: 5,
    isTrainingOnData: 4,
    EUHostingOption: 1,
    hasRetention: 5,
  },
  'Cloudflare AI': {
    url: 'https://developers.cloudflare.com/workers-ai/',
    description:
      'Cloudflare AI is a service that can host multiple Open and closed source models on the edge.',
    tag: 'API',
    isPriceListedWithoutTraining: 5,
    isTrainingOnData: 4,
    EUHostingOption: 1,
    hasRetention: 5,
  },
};

