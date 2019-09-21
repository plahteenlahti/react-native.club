import React from "react"
// import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"
import { RichText } from "prismic-reactjs"

export default ({ data, location }) => {
  const weeklies = data.prismic.allRn_weeklys.edges
  const siteTitle = data.site.siteMetadata.title
  console.log(location)
  if (!weeklies) return null
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="React Native Weeklies" />

      <div>
        {weeklies.map(post => {
          return (
            <div key={post.node._meta.id}>
              <h2>{RichText.asText(post.node.weekly_name)}</h2>
              {/* <p>{RichText.asText(post.node.description)}</p> */}
              <p>
                <time>{post.node.publish_date}</time>
              </p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    prismic {
      allRn_weeklys {
        edges {
          node {
            _meta {
              id
              uid
              type
            }
            weekly_name
            publish_date
          }
        }
      }
    }
  }
`
