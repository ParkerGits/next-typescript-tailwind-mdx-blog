import React, {SetStateAction, useState} from 'react'
import Post from './Post'
import {jsx} from '@emotion/core'
interface frontmatter {
  title: string
  topic: string
  routename: string
  description: string
  postnum: number
}

const liStyle = {
  lineHeight: '120% !important',
  '&:before': {content: 'none !important'},
  padding: '0px !important',
  border: '0px solid grey',
}
const hrStyle = {margin: '0 !important', marginBottom: '.5rem !important'}

export default function PostList({
  frontmatterList,
}: {
  frontmatterList: frontmatter[]
}) {
  const [topicSort, setTopicSort] = useState<null | string>(null)
  let topicCount = 0
  function topicOnClick(topic: string) {
    setTopicSort(topic)
    topicCount = 0
  }
  return (
    <div className="flex flex-col">
      <ul id="postlist" css={{margin: '0 !important'}}>
        {frontmatterList.map((frontmatter, index) => {
          if (topicSort) {
            if (frontmatter.topic == topicSort) {
              topicCount++
              return (
                <div>
                  {topicCount == 1 ? null : <hr css={hrStyle} />}
                  <li key={index} css={liStyle}>
                    <Post
                      frontmatter={frontmatter}
                      onClick={(topic) => topicOnClick}
                    />
                  </li>
                </div>
              )
            }
          } else {
            return (
              <div>
                {index == 0 ? null : <hr css={hrStyle} />}
                <li key={index} css={liStyle}>
                  <Post frontmatter={frontmatter} onClick={topicOnClick} />
                </li>
              </div>
            )
          }
        })}
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
      ) : null}
    </div>
  )
}
