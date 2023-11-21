'use client'

import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { usePathname } from 'next/navigation'

export default function Sidebar() {

  const path = usePathname();
  console.log(path);
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

