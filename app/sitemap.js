export default async function sitemap() {
  const baseUrl = 'https://www.jbsbar.com'

  return [
    { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/menu`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/gallery`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: 'yearly', priority: 0.6 },
  ]
}


