'use client'

import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from '.contentlayer/generated'
import Image from 'next/image'
import PostCard from './postCard'

export default function Posts() {
  return(
    <div className="flex flex-wrap w-full h-72 mt-4">
    <PostCard></PostCard>
    </div>
    
  )
}
