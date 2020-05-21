import React from 'react'
import { Link } from 'gatsby'

const PostPreview = ({ post: { frontmatter, excerpt } }) => {
  console.warn(frontmatter)
  return (
    <div className="max-w-full mb-5 rounded overflow-hidden shadow-lg">
      <Link to={frontmatter.path}>
        <div className="px-6 py-4">
          <div className="mb-2 flex justify-between items-center">
            <span className="font-bold text-xl">{frontmatter.title}</span>
            <span className="text-xs">{frontmatter.date}</span>
          </div>
          <p className="text-gray-700 text-base">
            {excerpt}
          </p>
        </div>
      </Link>

      {frontmatter.tags &&
        <div className="px-6 py-4">
          {frontmatter.tags.map(tag => <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 last:mr-0">{tag}</span>)}
        </div>
      }
      {/* <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
      </div> */}
    </div>
  )
}

export default PostPreview;