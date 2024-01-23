import { PostType } from '@/api/types/PostType'

export const api = {
  uri: process.env.NEXT_PUBLIC_API_URL ?? '',

  async posts(): Promise<PostType[]> {
    const response = await fetch(`${this.uri}/posts`)
    return response.json()
  },

  async postDetail(id: number): Promise<PostType> {
    const response = await fetch(`${this.uri}/posts/${id}`)
    return response.json()
  },
}
