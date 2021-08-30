import React, { useEffect, useState } from 'react'
import Post from './Post'
import { jsx } from '@emotion/core'
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
  const [topicFrontmatter, setTopicFrontmatter] = useState<Frontmatter[]>(
    frontmatterList,
  )
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
  return (
    <div className="flex flex-col">
      <ul id="postlist" css={{ margin: '0 !important' }}>
        {topicFrontmatter.map((frontmatter, index) => (
          <div key={frontmatter.routename}>
            {index !== 0 && <hr css={hrStyle} />}
            <li key={index} css={liStyle}>
              <Post
                frontmatter={frontmatter}
                onClick={topicOnClick}
                key={index}
              />
            </li>
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
        <div className="w-100 flex justify-end">
          <div
            className="p-1.3 px-1.5 rounded-md border border-gray-300 cursor-pointer"
            onClick={() => setShowEggheadNotes(!showEggheadNotes)}
          >
            <label htmlFor="egghead-notes-toggle" className="cursor-pointer">
              <input
                name="egghead-notes-toggle"
                type="checkbox"
                className="mr-2"
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
