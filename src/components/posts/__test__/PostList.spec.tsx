import { describe, it, vi, afterAll, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { HTMLAttributes } from 'react'
import payload from './payloads/posts.payload.json'
import { PostList } from '../PostList'
import { PostType } from '@/api/types/PostType'

vi.mock('next/image', () => ({
  default: (props: HTMLAttributes<HTMLImageElement>) => (
    <img {...props} alt="" />
  ),
}))

describe('Components - Posts - PostList', () => {
  afterAll(() => {
    vi.clearAllMocks()
  })

  it('should render list of posts', async () => {
    render(<PostList posts={payload} />)

    const elements = screen.getAllByTestId('post-item')

    elements.forEach((element, index) => {
      const post = payload[index] as PostType
      const itemScope = within(element)

      expect(itemScope.getAllByText(post.title)).toBeDefined()
    })

    expect(elements.length).toEqual(payload.length)
  })
})
