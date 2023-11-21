'use client'

import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from '.contentlayer/generated'
import Image from 'next/image'
import PostCard from '../../(post)/postCard'
import PostBox from '../../(post)/postBox'
import Sidebar from '../../(always)/sidebar'

export default function Posts() {
  return(
    <div className="flex items-start gap-12">
      <Sidebar/>
      <PostBox/>
    </div>
  )
}
