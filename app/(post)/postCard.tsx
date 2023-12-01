'use client';

import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts, Post } from '.contentlayer/generated';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function PostCard() {
  const currentTag = usePathname().split('/')[2]; // 현재 경로에서 추출한 태그
  const filteredPosts = currentTag ? allPosts.filter(post => post.tag === currentTag) : allPosts;

  const sortedPosts = filteredPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      {sortedPosts.map((post, idx) => (
        <div key={idx} className="h-72 w-1/4 p-2.5 box-border">
          <Link href={post.url}>
            <div className="h-full w-full shadow-md truncate hover:scale-105 hover:bg-background4">
              <div className="relative w-full h-1/2 overflow-hidden">
                <Image src={post.thumbnail} alt="post-thumbnail" fill />
              </div>
              <div className="flex flex-col p-3">
                <span className="text-green6">{`[${post.tag}]`}</span>
                <div className="truncate">{post.title}</div>
                <div className="truncate pt-1 text-xs">{post.description}</div>
              </div>
              <div className="text-right pl-4 pr-4 b-0">
                {format(parseISO(post.date), 'yyyy-MM-dd')}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}