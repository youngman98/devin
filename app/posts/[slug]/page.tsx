
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image';
import Link from 'next/link';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  
  const Content = getMDXComponent(post.body.code)

  return (
    <article className="prose prose-h1:text-4xl prose-p:leading-4 prose-li:leading-5 font-Pretendard py-10 px-10 mx-auto max-w-4xl">
      <div className="mb-8 text-right">
      <Link href={`/tag/${post.tag}`} className="">
      <p className=" max-w-full bg-green6 rounded-md text-center cursor-pointer">{post.tag}</p>
      </Link>
        <h1 className="text-center">{post.title}</h1>
        <h3 className="text-center">{post.description}</h3>
        <time dateTime={post.date} className="text-gray-600 mt-6">
          {format(parseISO(post.date), 'yyyy-MM-dd')}
        </time>
        
      </div>
      <div className="max-w-4xl">
        {/* <Image
          src={post.thumbnail}
          alt="썸네일"
          width={500}
          height={100}
          className="m-auto"
        /> */}
        <Content/>
      </div>
    </article>
  )
}

export default PostLayout