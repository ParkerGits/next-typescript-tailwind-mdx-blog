import Link from 'next/link'
interface frontmatter {
  title: string
  topic: string
  routename: string
  readtime: string
}

const Post = ({frontmatter}: {frontmatter: frontmatter}) => {
  return (
    <div className="my-0 flex items-baseline">
      <Link href={'/posts/' + frontmatter.topic + '/' + frontmatter.routename}>
        <a className="hover:text-pink-lord cursor-pointer">
          {frontmatter.title}
        </a>
      </Link>
      <span className="text-sm ml-2 rounded-lg p-2 text-white hover:text font-semibold bg-pink-lord">
        {frontmatter.readtime}
      </span>
    </div>
  )
}

export default Post
