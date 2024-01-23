import { describe, it, vi, afterAll, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HTMLAttributes } from 'react'
import payload from './payloads/post.payload.json'
import { PostDetail } from '../PostDetail'

vi.mock('next/image', () => ({
  default: (props: HTMLAttributes<HTMLImageElement>) => (
    <img {...props} alt="" />
  ),
}))

describe('Components - Posts - Detail - PostDetail', () => {
  afterAll(() => {
    vi.clearAllMocks()
  })

  it('should render post', async () => {
    render(<PostDetail post={payload} />)

    expect(screen.getByRole('img')).toBeDefined()
    expect(
      screen.getByRole('heading', { level: 1, name: payload.title })
    ).toBeDefined()
    expect(screen.getByTestId('post-body').textContent).toContain(payload.body)
  })
})
