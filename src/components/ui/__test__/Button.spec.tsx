import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Button } from '../Button'

describe('Components - UI - Button', () => {
  it('should render children', () => {
    const clickMock = vi.fn()

    render(
      <Button onClick={clickMock} className="custom-class">
        Test content
      </Button>
    )

    const button = screen.getByRole('button', { name: 'Test content' })

    fireEvent.click(button)

    expect(button).toBeDefined()
    expect(clickMock).toHaveBeenCalledOnce()
  })
})
