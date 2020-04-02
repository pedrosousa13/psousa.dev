import React from 'react'
import { graphql } from 'gatsby'
import '../styles/style.scss'
import Header from '../components/header'
const BlogTemplate = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Header />
      <div className="section">
        <div className="blog-post">
          <h1 className="main-title title">{frontmatter.title}</h1>
          <h2 className="subtitle">{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
export default BlogTemplate
