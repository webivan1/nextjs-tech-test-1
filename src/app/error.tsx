'use client'

import { Button } from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="h-screen w-full flex justify-center items-center text-center">
      <div>
        <h2 className="text-xl mb-3">Something went wrong!</h2>
        <p className="bg-red-100 text-red-600 rounded-md mb-3 p-4">
          {error.message}
        </p>
        <Button onClick={reset}>Try Again</Button>
      </div>
    </div>
  )
}
