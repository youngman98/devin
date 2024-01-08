
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'

import Image from 'next/image';
import Link from 'next/link';
import TOC from 'app/components/toc/toc';
import { TOCAside } from 'app/components/toc/tocStyle';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  
  const Content = getMDXComponent(post.body.code)

  return (
    <div>
      <TOCAside>
        <TOC/>
      </TOCAside>
      {/* post */}
      <article className="prose prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:leading-4 prose-li:leading-5 font-Pretendard py-10 px-10 mx-auto max-w-4xl dark:text-text6 dark:opacity-90 dark:prose-h1:text-text6 dark:prose-h2:text-text6 dark:prose-h3:text-text6">
        {/* post 상단-제목, 설명, 태그, 작성일 */}
        <div className="mb-8 text-right">
          <Link href={`/tag/${post.tag}`} className="no-underline">
            <p className=" max-w-full bg-green6 dark:bg-green8 rounded-md text-center cursor-pointer">{post.tag}</p>
          </Link>
          <p className="text-center text-4xl font-bold text-text5 dark:text-text6 dark:opacity-90">{post.title}</p>
          <p className="text-center">{post.description}</p>
          <time dateTime={post.date} className="text-gray-600 mt-6">
            {format(parseISO(post.date), 'yyyy-MM-dd')}
          </time>
        </div>
        {/* post 본문 */}
        <div className="max-w-4xl">
          <Content/>
        </div>
      </article>
    </div>
  )
}

export default PostLayout