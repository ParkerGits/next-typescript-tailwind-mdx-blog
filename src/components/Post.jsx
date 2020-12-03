import Link from 'next/link'
import { css } from 'emotion'
export const Post = ({ post }) => {
  const {
    slug,
    title,
    topic
  } = post
  
  return (
      <div className="my-0 flex items-baseline">
        <Link href={"/blog" + slug}>
          <span className="hover:text-pink-lord cursor-pointer">{title}</span>
        </Link>
        {/* <div className={"text-sm ml-2 rounded-lg p-2 text-white hover:text font-semibold bg-blue-lord"}>{topic}</div>*/}
      </div>
  )
}