'use client'

import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { usePathname } from 'next/navigation'

export default function Sidebar() {

  // 현재 경로를 path에 담는다.
  const path = usePathname();

  // allPosts의 post 갯수만큼 반복하는 map을 사용해 post.tag를 모두 찾아내고 Set으로 중복 제거를 한 뒤 sort로 오름차순 정렬한다.
  const uniqueTags = [...new Set(allPosts.map((post) => post.tag))].sort();

  return (
    <aside className="w-40 mt-4 sticky top-0">
      <h2 className="text-2xl mb-5">📚 Tags</h2>
      
      <ul className="flex flex-col gap-3 max-h-80">
        <li>
          <Link href={'/'} className={`px-2.5 py-2.5 rounded-md ${path === '/' ? 'bg-green6' : 'bg-theme'} active:bg-background2 hover:bg-green6 block`}>
            전체
          </Link>
        </li>
        {uniqueTags.map((tag, i)=>(
          <li key={tag}>
            <Link href={`/tag/${tag}`} className={`px-2.5 py-2.5 rounded-md ${path === `/tag/${tag}` ? 'bg-green6' : 'bg-theme'} active:bg-background2 hover:bg-green6 block`}>
              {tag}
            </Link>
          </li>
        ))}

      </ul>
    </aside>
    
  )
}

