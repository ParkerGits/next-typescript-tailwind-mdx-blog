import React from 'react'
import Post from './Post'
interface frontmatter {
  title: string
  topic: string
  routename: string
}

export default function PostList({
  frontmatterList,
}: {
  frontmatterList: frontmatter[][]
}) {
  return (
    <>
      {/* {frontmatterList[0][0] && <h3 className="dark:text-white">Math 🔢</h3>}
      {frontmatterList[0][0] && (
        <ul id="math-list">
          {frontmatterList[0].map((frontmatter, index) => (
            <li key={index}>
              <Post frontmatter={frontmatter} />
            </li>
          ))}
        </ul>
      )} */}
      <h3 className="dark:text-white">Personal Stories 📖</h3>
      <ul id="personal-list">
        {frontmatterList[0].map((frontmatter, index) => (
          <li key={index}>
            <Post frontmatter={frontmatter} />
          </li>
        ))}
      </ul>
      {frontmatterList[1][0] && (
        <h3 className="dark:text-white">Programming💻</h3>
      )}
      {frontmatterList[1][0] && (
        <ul id="programming-list">
          {frontmatterList[1].map((frontmatter, index) => (
            <li key={index}>
              <Post frontmatter={frontmatter} />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
