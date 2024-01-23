'use client'

import { PostType } from '@/api/types/PostType'
import { HeartIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { FC } from 'react'

export type PropsType = {
  post: PostType
}

export const PostDetail: FC<PropsType> = ({ post }) => {
  return (
    <div className="flex flex-col">
      <Image
        src="https://placehold.co/1024x400.png"
        width="1024"
        height="400"
        title="Image"
        alt="Image"
        className="w-full rounded-lg mb-4"
      />
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{post.title}</h1>
        <div className="lg:flex text-md">
          <div className="text-primary uppercase mr-6">Productivity</div>
          <div>Published on December 28, 2020</div>
          <div className="ml-auto flex items-center">
            <HeartIcon className="text-primary w-5 h-5 inline mr-1" />
            12 appreciations
          </div>
        </div>
      </div>
      <div data-testid="post-body" className="text-md">
        {post.body}
      </div>
    </div>
  )
}
