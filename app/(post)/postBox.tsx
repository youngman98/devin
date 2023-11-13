'use client'

import Link from 'next/link'
import styled from 'styled-components'
import Thumbnail from './thumbnail'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from '.contentlayer/generated'

let PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 310px;
  flex-grow: 2;
`

let Container = styled.div`
  height: 310px;
  width: 25%;
  padding: 10px;
  box-sizing: border-box;
`

let PostBox = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: 0px 4px 10px 2px rgba(0,0,0,.3);
  overflow: hidden;
  &:hover {
    background: var(--box-hover);
  }
  &:hover img{
    transform: scale(1.1);
  }
`

let ThumbnailBox = styled.div`
  position: relative;
  width: 100%;
  height: 165px;
  overflow: hidden;
`

let ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  transition: transform .3s ease-in-out;
  background-image: 
    url("https://user-images.githubusercontent.com/75000376/273962704-aefa72e5-6698-44db-b09d-610885799755.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
`

let InnerBox = styled.div`
  display: flex;
  padding: 12px;
`

let Inner = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

let PostDate = styled.p`
  text-align: right;
  padding-left: 15px;
  padding-right: 15px;
`

export default function Posts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return(
    <PostList>
    {posts.map((post, idx) => 
    <Container key={idx}>
      <Link href={post.url}>
        <PostBox>
          <ThumbnailBox>
            <Thumbnail src={post.thumbnail} />
          </ThumbnailBox>
          <InnerBox>
            <span>{`[${post.tag}]`}</span>
            <Inner>{post.title}</Inner>
          </InnerBox>
          <PostDate>
            {format(parseISO(post.date), 'yyyy-MM-dd')}
          </PostDate>
        </PostBox>
        </Link>
    </Container>
    )}
    </PostList>
    
  )
}
