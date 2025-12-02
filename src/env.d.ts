/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.webp' {
  const metadata: import('astro').ImageMetadata;
  export default metadata;
}

declare module '*.png' {
  const metadata: import('astro').ImageMetadata;
  export default metadata;
}

declare module '*.jpg' {
  const metadata: import('astro').ImageMetadata;
  export default metadata;
}

declare module '*.jpeg' {
  const metadata: import('astro').ImageMetadata;
  export default metadata;
}

declare module '*.svg' {
  const metadata: import('astro').ImageMetadata;
  export default metadata;
}
