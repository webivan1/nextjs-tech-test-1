import { api } from '@/api'
import { PostList } from '@/components/posts/PostList'

export default async function PostListPage() {
  const posts = await api.posts()

  return <PostList posts={posts} />
}
