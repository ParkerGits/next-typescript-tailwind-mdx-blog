import Link from 'next/link'
interface frontmatter {
  title: string
  topic: string
  routename: string
  description: string
  postnum: number
}

const Post = ({
  frontmatter,
  onClick,
}: {
  frontmatter: frontmatter
  onClick: (topic: string) => any
}) => {
  return (
    <div className="my-0" css={{margin: '0 !important'}}>
      <span
        onClick={() => onClick(frontmatter.topic)}
        className={`text-xs ml-1 mt-1 rounded-md p-1 md:text-sm md:p-1.3 text-white hover: cursor-pointer font-semibold ${
          frontmatter.topic == 'programming'
            ? 'bg-pink-lord hover:bg-pink-hover'
            : frontmatter.topic == 'math'
            ? 'bg-blue-lord hover:bg-blue-hover'
            : 'bg-yellow-lord hover:bg-yellow-hover'
        } float-right`}
      >
        {frontmatter.topic}
      </span>
      <Link href={'/posts/' + frontmatter.topic + '/' + frontmatter.routename}>
        <a className="hover:text-pink-lord cursor-pointer text-lg md:text-2xl">
          {frontmatter.title}
        </a>
      </Link>
      <br />
      <span
        className="text-xs sm:text-sm md:text-base rounded-lg text-gray-500 hover:text dark:text-white"
        css={{padding: '0 !important', marginLeft: '0 !important'}}
      >
        {frontmatter.description}
      </span>
    </div>
  )
}

export default Post
