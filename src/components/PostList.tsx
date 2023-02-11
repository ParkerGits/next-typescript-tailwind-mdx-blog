import React, { useEffect, useState } from 'react'
import Post from './Post'
import jsx from '@emotion/core'
import Link from 'next/link'

type Frontmatter = {
  title: string
  topic: string
  routename: string
  description: string
  postnum: number
}

const liStyle = {
  lineHeight: '120% !important',
  '&:before': `content: '"none !important"'`,
  padding: '0px !important',
  border: '0px solid grey',
}
const hrStyle = { margin: '0 !important', marginBottom: '.5rem !important' }

export default function PostList({
  frontmatterList,
}: {
  frontmatterList: Frontmatter[]
}) {
  const [topicSort, setTopicSort] = useState<null | string>(null)
  const [topicFrontmatter, setTopicFrontmatter] = useState<
    Frontmatter[] | null
  >(null)
  const [showEggheadNotes, setShowEggheadNotes] = useState(false)
  useEffect(() => {
    setTopicFrontmatter(
      frontmatterList.filter((frontmatter) =>
        showEggheadNotes
          ? frontmatter.topic === 'egghead-notes'
          : topicSort
          ? frontmatter.topic === topicSort
          : frontmatter.topic !== 'egghead-notes',
      ),
    )
  }, [topicSort, showEggheadNotes])
  function topicOnClick(topic: string) {
    setTopicSort(topic)
  }
  if (!topicFrontmatter) return null
  return (
    <div className="flex flex-col">
      <ul
        id="postlist"
        className="list-none px-1"
        css={{ margin: '0 !important' }}
      >
        {topicFrontmatter.map((frontmatter, index) => (
          <div key={frontmatter.routename}>
            <li key={index} css={liStyle}>
              <Post
                frontmatter={frontmatter}
                onClick={topicOnClick}
                key={index}
              />
            </li>
            <hr css={hrStyle} />
          </div>
        ))}
      </ul>
      {topicSort ? (
        <button
          className="self-center mt-3 p-1.3 px-1.5 rounded-md border border-gray-300"
          onClick={() => {
            setTopicSort(null)
          }}
        >
          &#8592; all topics
        </button>
      ) : (
        <div className="w-100 flex flex-col xs:flex-row justify-around space-between items-center">
          <div className="h-9 my-1">
            <Link href="/bio">
              <button className="w-full h-full bg-orange-lord hover:bg-orange-hover rounded-md text-white leading-none px-1.5 text-sm sm:text-base">
                read my bio &rarr;
              </button>
            </Link>
          </div>
          <div className="h-9 my-1">
            <Link href="/portfolio">
              <button className="w-full h-full bg-pink-lord hover:bg-pink-hover rounded-md text-white leading-none px-1.5 text-sm sm:text-base">
                check out my portfolio &rarr;
              </button>
            </Link>
          </div>
          <div
            className="px-1 sm:px-1.5 rounded-md bg-darkblue-lord cursor-pointer text-white leading-none flex items-center h-9 text-sm sm:text-base my-1 text-center"
            onClick={() => setShowEggheadNotes(!showEggheadNotes)}
          >
            <label htmlFor="egghead-notes-toggle" className="cursor-pointer">
              <input
                name="egghead-notes-toggle"
                type="checkbox"
                className="mr-1"
                onChange={(e) => setShowEggheadNotes(e.target.checked)}
                checked={showEggheadNotes}
              />
              show egghead notes
            </label>
          </div>
        </div>
      )}
    </div>
  )
}
