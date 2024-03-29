import React from 'react'
import { urlFor } from '../sanity'
import { Post } from '../typings'

const PostCard = (post: Post) => {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-lg border">
      <img
        className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
        src={urlFor(post.mainImage).url()}
      />
      <div className="flex justify-between bg-white p-5">
        <div>
          <p className="text-lg font-bold">{post.title}</p>
          <p className="text-sm">
            {post.description} by {post.author.name}
          </p>
        </div>
        <img
          className="v-12 h-12 rounded-full"
          src={urlFor(post.author.image).url()}
        />
      </div>
    </div>
  )
}

export default PostCard
