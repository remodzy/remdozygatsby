import { FluidObject } from 'gatsby-image'

export type Article = {
  body?: string
  createdAt?: string
  description: string
  id: string
  image: {
    alt: string
    fluid: FluidObject
    imageTitle: string
  }
  slug: string
  title: string
}

export type ResourceNode = {
  createdAt: string
  description: {
    description: string
  }
  body?: {
    childMarkdownRemark: {
      html: string
    }
  }
  id: string
  image: {
    alt: string
    fluid: FluidObject
    imageTitle: string
  }
  slug: string
  title: string
}

type Edge = {
  node: ResourceNode
}

type InputParams = {
  articles: {
    edges: Edge[]
  }
}

export const prepareArticles = (data: InputParams): Article[] => {
  if (!data?.articles?.edges?.length) {
    return []
  }

  return data.articles.edges.map((item: Edge) => prepareArticle(item.node))
}

export const prepareArticle = (node: ResourceNode): Article => ({
  body: node?.body?.childMarkdownRemark?.html,
  createdAt: node?.createdAt,
  description: node?.description?.description,
  id: node?.id,
  image: node?.image,
  slug: node?.slug,
  title: node?.title,
})
