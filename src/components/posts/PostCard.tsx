'use client'

import { PostType } from '@/api/types/PostType'
import { Card, CardContent, CardTitle } from '@/components/ui/Card'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { HeartIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

export type PropsType = {
  post: PostType
}

export const PostCard: FC<PropsType> = ({ post }) => {
  return (
    <Card data-testid="post-item" className="hover:shadow-md">
      <Link href={`/post/${post.id}`}>
        <Image
          src="https://placehold.co/300x180.png"
          width="300"
          height="200"
          title="Image"
          alt="Image"
          className="w-full rounded-lg"
        />
      </Link>
      <CardContent className="flex flex-col justify-between flex-1 gap-2">
        <div>
          <Link href={`/post/${post.id}`}>
            <CardTitle>{post.title}</CardTitle>
          </Link>
          <div className="text-xs text-gray-500 flex justify-between mb-1">
            <div>
              Nov 20, 2020 by <a className="text-primary">John Doe</a>
            </div>
            <div>10 min read</div>
          </div>
          <div className="text-xs text-gray-500 mb-2 flex items-center">
            <HeartIcon className="text-primary w-4 h-4 inline mr-1" />
            12 appreciations
          </div>
          <div className="text-md text-gray-500">{post.title}</div>
        </div>
        <Link
          href={`/post/${post.id}`}
          className="group flex items-center font-bold text-primary"
        >
          Read More
          <ArrowRightIcon className="w-4 h-4 inline ml-2 transition-all group-hover:ml-1" />
        </Link>
      </CardContent>
    </Card>
  )
}
