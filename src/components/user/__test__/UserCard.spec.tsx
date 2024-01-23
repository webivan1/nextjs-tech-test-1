import { describe, it, expect, vi, afterAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UserCard } from '../UserCard'
import { HTMLAttributes } from 'react'

vi.mock('next/image', () => ({
  default: (props: HTMLAttributes<HTMLImageElement>) => (
    <img {...props} alt="" />
  ),
}))

describe('Components - User - UserCard', () => {
  afterAll(() => {
    vi.clearAllMocks()
  })

  it('should render user detail', () => {
    const user = {
      username: 'Test username',
      jobTitle: 'Test job title',
      photo: 'test-user-photo.png',
    }

    render(<UserCard user={user} />)

    const image = screen.getByRole('img')

    expect(image).toBeDefined()
    expect(image).toHaveProperty('src')
    expect(image.getAttribute('src')).toContain(user.photo)

    expect(screen.getByText(user.username)).toBeDefined()
    expect(screen.getByText(user.jobTitle)).toBeDefined()
  })
})
