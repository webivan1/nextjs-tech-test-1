'use client'

import { PropsWithChildren, HTMLAttributes, forwardRef } from 'react'

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<HTMLAttributes<HTMLButtonElement>>
>(({ children, ...props }, ref) => {
  return (
    <button
      className="py-2 shadow-md px-3 bg-blue-500 hover:bg-blue-600 text-white border-1 border-blue-600 rounded-sm"
      {...props}
      ref={ref}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
