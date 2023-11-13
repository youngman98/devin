import Image from 'next/image'
import PostBox from './(post)/postBox'
import Header from './(always)/header'
import Link from 'next/link'
import Sidebar from './(always)/sidebar'

export default function Home() {
  return (
    <>
    <div className="flex items-start gap-12">
      <Sidebar/>
      <PostBox/>
    </div>
    </>
  )
}
