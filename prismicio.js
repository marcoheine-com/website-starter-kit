import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'
import sm from './slicemachine.config.json'

export const endpoint = sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  if (doc?.link_type === 'Web') {
    return doc.url
  }

  switch (doc.type) {
    case 'index':
      return '/'
    case 'content-page':
      return `/${doc.uid}`
    case 'service-detail':
      return `/services/${doc.uid}`
    case 'news-detail':
      return `/news/${doc.uid}`
    default:
      return '/'
  }
}

// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
  })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}
