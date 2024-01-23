import { render } from '@testing-library/react'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import PostDetailPage from '../page'
import { api } from '@/api'

describe('App - Page', () => {
  beforeAll(() => {})

  it('should call API request', async () => {
    const post = {
      id: 1,
      userId: 2,
      title: 'Test title',
      body: 'Test body',
    }

    const apiMock = vi.spyOn(api, 'postDetail').mockResolvedValueOnce(post)

    render(await PostDetailPage({ params: { id: post.id } }))

    expect(apiMock).toHaveBeenCalledWith(post.id)

    apiMock.mockClear()
  })
})
