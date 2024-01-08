'use client'

import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { usePathname } from 'next/navigation'

export default function Sidebar() {

  // 현재 경로를 path에 담는다.
  const path = usePathname();

  // post의 tag를 중복제거하고 정렬하여 uniqueTags에 담는다.
  const uniqueTags = [...new Set(allPosts.map((post) => post.tag))].sort();

  return (
    <aside className="w-40 mt-4 sticky top-0 dark:text-text6 dark:opacity-90">
      <h2 className="text-2xl mb-5">📚 Tags</h2>
      
      <ul className="flex flex-col gap-3 max-h-80">
        <li>
          <Link href={'/'} className={`px-2.5 py-2.5 rounded-md ${path === '/' ? 'bg-green6 dark:bg-green8' : 'bg-background3 dark:bg-background5'} active:bg-background2 hover:bg-green6 dark:hover:bg-green8 block`}>
            전체
          </Link>
        </li>
        {uniqueTags.map((tag, i)=>(
          <li key={tag}>
            <Link href={`/tag/${tag}`} className={`px-2.5 py-2.5 rounded-md ${path === `/tag/${tag}` ? 'bg-green6 dark:bg-green8' : 'bg-background3 dark:bg-background5'} active:bg-background2 hover:bg-green6 dark:hover:bg-green8 block`}>
              {tag}
            </Link>
          </li>
        ))}

      </ul>
    </aside>
    
  )
}

