'use client'

import { cn } from '@/utils/cn'
import { forwardRef, HTMLAttributes } from 'react'

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'bg-white rounded-lg shadow-sm overflow-hidden flex flex-col w-full',
          className
        )}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={cn('p-4', className)}>
      {children}
    </div>
  )
})

CardContent.displayName = 'CardContent'

export const CardTitle = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className="text-lg font-semibold mb-2">
      <div className="text-ellipsis whitespace-nowrap overflow-hidden">
        {children}
      </div>
    </div>
  )
})

CardTitle.displayName = 'CardTitle'
