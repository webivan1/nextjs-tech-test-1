import { Loading } from '@/components/ui/Loading'

export default function loadingPosts() {
  return (
    <div className="flex justify-center w-full p-12 sm:p-24">
      <Loading />
    </div>
  )
}
