import React from 'react'
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
const hrStyle = {margin: '0 !important'}
export default function PostList({
  frontmatterList,
}: {
  frontmatterList: frontmatter[]
}) {
  return (
    <>
      {/* {frontmatterList[0][0] && <h3 className="dark:text-white">Math 🔢</h3>}
      {frontmatterList[0][0] && (
        <ul id="math-list postlist">
          {frontmatterList[0].map((frontmatter, index) => (
            <li key={index}>
              <Post frontmatter={frontmatter} />
            </li>
          ))}
        </ul>
      )} */}
      <ul id="programming-list postlist" css={{margin: '0 !important'}}>
        {frontmatterList.map((frontmatter, index) => (
          <div>
            <li key={index} css={liStyle}>
              <Post frontmatter={frontmatter} />
            </li>
            {index == frontmatterList.length - 1 ? null : <hr css={hrStyle} />}
          </div>
        ))}
      </ul>
    </>
  )
}
