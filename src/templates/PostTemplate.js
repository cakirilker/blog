import React from "react"
import Layout from "@layouts/layout"
import { SEO, PostTags } from "@components";
import { graphql } from "gatsby";

const PostTemplate = ({
  data,
}) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <article className="blog-post-container max-w-full mb-5 rounded overflow-hidden bg-white shadow-lg">
        <div className="px-6 py-4">
          <header className="mb-2 flex justify-center items-center flex-col">
            <h1 className="mt-0">{post.frontmatter.title}</h1>
            <h2 className="m-0 text-sm">
              <time className="text-gray-600" dateTime={post.frontmatter.date}>{post.frontmatter.formattedDate}</time>
            </h2>
            <h3 className="m-0">
              <PostTags tags={post.frontmatter.tags} />
            </h3>
          </header>
          <div
            className="blog-post-content text-gray-700 text-base"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        formattedDate: date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`;

export default PostTemplate;
