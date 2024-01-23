'use client'

import { Avatar } from '@/components/ui/Avatar'
import { Card, CardContent } from '@/components/ui/Card'
import { SocialButton } from '@/components/user/SocialButton'
import { FacebookIcon } from '@/components/user/icons/FacebookIcon'
import { FC } from 'react'

export type PropsType = {
  user: {
    photo: string
    username: string
    jobTitle: string
  }
}

export const UserCard: FC<PropsType> = ({ user }) => {
  return (
    <Card className="bg-gray-200 shadow-none">
      <CardContent>
        <Avatar url={user.photo} size={60} className="mb-4" />
        <div className="font-bold">{user.username}</div>
        <div className="text-sm mb-4">{user.jobTitle}</div>
        <div className="text-sm mb-6">
          To add your article, send us an email to{' '}
          <a className="font-bold" href="mailto:test@test.com">
            test@test.com
          </a>
        </div>

        <div className="flex gap-3 lg:justify-between">
          <SocialButton>
            <FacebookIcon className="w-4 h-4" />
          </SocialButton>
          <SocialButton>
            <FacebookIcon className="w-4 h-4" />
          </SocialButton>
          <SocialButton>
            <FacebookIcon className="w-4 h-4" />
          </SocialButton>
          <SocialButton>
            <FacebookIcon className="w-4 h-4" />
          </SocialButton>
        </div>
      </CardContent>
    </Card>
  )
}
