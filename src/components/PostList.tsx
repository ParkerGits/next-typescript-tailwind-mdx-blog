import React from 'react'
import Post from './Post'
interface frontmatter {
  title: string
  topic: string
  routename: string
  readtime: string
}

export default function PostList({
  frontmatterEach,
}: {
  frontmatterEach: Array<Array<frontmatter>>
}) {
  return (
    <div>
      {frontmatterEach[0][0] && <h3>Math 🔢</h3>}
      {frontmatterEach[0][0] && (
        <ul id="programming-list">
          {frontmatterEach[0].map((frontmatter, index) => (
            <li key={index}>
              <Post frontmatter={frontmatter} />
            </li>
          ))}
        </ul>
      )}
      {frontmatterEach[1][0] && <h3>Personal Stories 📖</h3>}
      {frontmatterEach[1][0] && (
        <ul id="math-list">
          {frontmatterEach[1].map((frontmatter, index) => (
            <li key={index}>
              <Post frontmatter={frontmatter} />
            </li>
          ))}
        </ul>
      )}
      {frontmatterEach[2][0] && <h3>Programming💻</h3>}
      {frontmatterEach[2][0] && (
        <ul id="personal-list">
          {frontmatterEach[2].map((frontmatter, index) => (
            <li key={index}>
              <Post frontmatter={frontmatter} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
