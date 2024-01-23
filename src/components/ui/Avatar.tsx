'use client'

import { cn } from '@/utils/cn'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

export type PropsType = {
  url: string
  size?: number
}

export const Avatar: FC<HTMLAttributes<HTMLDivElement> & PropsType> = ({
  url,
  className,
  size = 70,
}) => {
  return (
    <Image
      src={url}
      width={size}
      height={size}
      title="User avatar"
      alt="User avatar"
      className={cn('rounded-full', className)}
    />
  )
}
