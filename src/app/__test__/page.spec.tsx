import { render } from '@testing-library/react'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import PostsPage from '../page'
import { api } from '@/api'

describe('App - Page', () => {
  beforeAll(() => {})

  it('should call API request', async () => {
    const apiMock = vi.spyOn(api, 'posts').mockResolvedValueOnce([])

    render(await PostsPage())

    expect(apiMock).toHaveBeenCalledOnce()

    apiMock.mockClear()
  })
})
