import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialButton } from '../SocialButton'

describe('Components - User - SocialButton', () => {
  it('should render children', () => {
    render(<SocialButton>Test content</SocialButton>)

    expect(screen.getByText('Test content')).toBeDefined()
  })
})
