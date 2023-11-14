import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-40 mt-4 sticky top-5">
      <h2 className="text-2xl mb-5">📚 Tags</h2>
      
      <ul className="flex flex-col gap-3 max-h-80">
        <li><Link href="/" className="px-2.5 py-2.5 rounded-md bg-indigo-300 active:bg-indigo-300 hover:bg-indigo-200 block">전체</Link></li>
        <li><Link href={`/`} className="px-2.5 py-2.5 rounded-md bg-slate-100 active:bg-indigo-300 hover:bg-indigo-200 block">태그들</Link></li>
      </ul>
    </aside>
    
  )
}

