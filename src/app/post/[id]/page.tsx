import { api } from '@/api'
import { PostType } from '@/api/types/PostType'
import { PostCard } from '@/components/posts/PostCard'
import { PostDetail } from '@/components/posts/detail/PostDetail'
import { UserCard } from '@/components/user/UserCard'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export type PropsType = {
  params: {
    id: number
  }
}

const mockedUser = {
  photo: 'https://placehold.co/70x70.png',
  username: 'John Doe',
  jobTitle: 'Front-end developer',
}

const mockedPost: PostType = {
  id: 2,
  title: 'Lorem Ipsum is simply dummy text',
  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  userId: 1,
}

export default async function PostPage({ params: { id } }: PropsType) {
  const post = await api.postDetail(id)

  return (
    <>
      <Link
        href="/"
        className="text-primary flex items-center text-xl mb-6 font-semibold"
      >
        <ArrowLeftIcon className="text-primary w-5 h-5 inline mr-1" />
        Back to list
      </Link>
      <div className="flex flex-col xl:flex-row gap-8">
        <PostDetail post={post} />
        <div className="w-full xl:w-[500px]">
          <UserCard user={mockedUser} />
          <hr className="border-t border-t-gray-300 my-6" />
          <h3 className="font-bold text-xl mb-4">Popular Posts</h3>
          <PostCard post={mockedPost} />
        </div>
      </div>
    </>
  )
}
