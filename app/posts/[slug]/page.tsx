import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  const Content = getMDXComponent(post.body.code)

  return (
    <article className="py-10 px-10 mx-auto max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="text-5xl">{`[${post.tag}]`}{post.title}</h1>
        <time dateTime={post.date} className="text-base text-gray-600 mt-6">
          {format(parseISO(post.date), 'yyyy-MM-dd')}
        </time>
      </div>
      <div className="max-w-4xl prose prose-zinc">
        <Content/>
      </div>
    </article>
  )
}

export default PostLayout