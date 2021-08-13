import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils"
import slugify from 'slugify'

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

const Tags = ({
  data: {
    allContentfulRecipe: { nodes: tags },
  },
}) => {
  const tagsASC = setupTags(tags)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {tagsASC.map((tag, index) => {
            const [text, value] = tag
            const tagSlug = slugify(text, { lower: true })
            return (
              <>
                <Link to={`/tags/${tagSlug}`} key={index} className="tag">
                  <h5>{text}</h5>
                  <p>{value} recipe</p>
                </Link>
              </>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export default Tags
