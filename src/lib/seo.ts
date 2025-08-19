import { NextSeoProps } from 'next-seo'

export const defaultSEO: NextSeoProps = {
  title: 'Saivinay Manda - Software Developer',
  description: 'Portfolio - seamless, scalable, enjoyable, AI-ready software development.',
  openGraph: {
    type: 'website',
    title: 'Saivinay Manda - Software Developer',
    description: 'Portfolio - seamless, scalable, enjoyable, AI-ready software development.',
    images: [{ url: '/og.png' }]
  },
  twitter: { cardType: 'summary_large_image' }
}
