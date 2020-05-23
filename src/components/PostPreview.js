import React from 'react'
import { Link } from 'gatsby'
import { PostTags } from "@components";

const PostPreview = ({ post: { frontmatter, excerpt } }) => {
  return (
    <div className="max-w-full bg-white mb-5 rounded overflow-hidden shadow-lg rounded-t-none border-t-8 border-emerland">
      <Link to={frontmatter.path}>
        <div className="px-6 py-4">
          <div className="mb-2 flex justify-between items-center text-wetasphalt">
            <span className="font-bold text-xl">{frontmatter.title}</span>
            <span className="text-xs">{frontmatter.date}</span>
          </div>
          <p className="text-gray-700 text-base">
            {excerpt}
          </p>
        </div>
      </Link>
      <PostTags tags={frontmatter.tags} />
    </div>
  )
}

export default PostPreview;