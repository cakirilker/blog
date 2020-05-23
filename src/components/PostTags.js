import React from 'react'

const PostTags = ({ tags = [] }) => {
  if (tags.length === 0) {
    return null;
  }
  return (
    <div className="px-6 py-4">
      {tags.map(tag => <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 last:mr-0">{tag}</span>)}
    </div>
  )
}

export default PostTags
