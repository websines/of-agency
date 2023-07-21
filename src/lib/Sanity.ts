import { createClient } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url'

export const sanity_client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API,
  dataset: 'production',
  useCdn: true,
});


const builder = ImageUrlBuilder(sanity_client)

export function urlFor(source: string){
  return builder.image(source)
}