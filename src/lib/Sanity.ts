import SanityClient from 'next-sanity-client';

export const sanity_client = new SanityClient({
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'YOUR_DATASET',
  useCdn: process.env.NODE_ENV === 'production',
});
