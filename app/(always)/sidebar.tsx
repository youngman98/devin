import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-40 bg-slate-300 mt-4 sticky">
      <h2 className="text-2xl mb-5">📚 Tags</h2>
      
      <ul className="flex flex-col gap-4 max-h-80">
        <li><Link href="/" className="px-2.5 py-2.5 bg-pink-500 block">전체</Link></li>
        <li><Link href={`/`} className="px-2.5 py-2.5 bg-pink-300 block">태그들</Link></li>
      </ul>
    </aside>
    
  )
}

