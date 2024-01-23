import { cn } from '@/utils/cn'
import { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react'

export const SocialButton: FC<
  PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>
> = ({ children, href, className }) => {
  return (
    <a
      href={href}
      className={cn(
        'rounded-full border text-gray-400 border-gray-300 flex justify-center cursor-pointer items-center w-8 h-8 hover:text-gray-500 hover:border-gray-500',
        className
      )}
      target="_blank"
    >
      {children}
    </a>
  )
}
