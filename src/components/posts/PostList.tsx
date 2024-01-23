'use client'

import { PostType } from '@/api/types/PostType'
import { PostCard } from '@/components/posts/PostCard'
import { FC } from 'react'

export type PropsType = {
  posts: PostType[]
}

export const PostList: FC<PropsType> = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-7">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
