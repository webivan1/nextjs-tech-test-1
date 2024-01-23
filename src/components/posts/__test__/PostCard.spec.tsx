import { describe, it, vi, afterAll, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { HTMLAttributes } from 'react'
import payload from './payloads/posts.payload.json'
import { PostType } from '@/api/types/PostType'
import { PostCard } from '../PostCard'

vi.mock('next/image', () => ({
  default: (props: HTMLAttributes<HTMLImageElement>) => (
    <img {...props} alt="" />
  ),
}))

const testPost = payload[0] as PostType

describe('Components - Posts - PostCard', () => {
  afterAll(() => {
    vi.clearAllMocks()
  })

  it('should render post', async () => {
    render(<PostCard post={testPost} />)

    const rootElement = within(screen.getByTestId('post-item'))

    expect(rootElement).toBeDefined()
    expect(rootElement.getByRole('img')).toBeDefined()
    expect(rootElement.getAllByText(testPost.title)).toBeDefined()

    rootElement.getAllByRole('link').forEach((link) => {
      expect(link.getAttribute('href')).toEqual(`/post/${testPost.id}`)
    })
  })
})
