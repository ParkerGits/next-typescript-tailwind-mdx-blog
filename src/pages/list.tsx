import fs from 'fs'
import matter from 'gray-matter'

import Layout from '../layouts/index'
import PostList from '../components/PostList'

interface frontmatter {
  title: string
  topic: string
  routename: string
  readtime: string
}

const List = ({
  frontmatterEach,
}: {
  frontmatterEach: Array<Array<frontmatter>>
}) => {
  return (
    <Layout
      meta={{
        title: 'List of Posts 📝',
        description: "Every post ever made under Parker's rule.",
        titleAppendSiteName: true,
        url: '',
      }}
    >
      <PostList frontmatterEach={frontmatterEach} />
    </Layout>
  )
}

export async function getStaticProps() {
  const path = './src/pages/posts'
  let folders = fs.readdirSync(path)
  let frontmatterEach = folders.map((folder) => {
    let files = fs.readdirSync(path + '/' + folder)
    return files.map((file) => {
      let content = fs.readFileSync(path + '/' + folder + '/' + file, 'utf8')
      let frontmatter = matter(content).data
      return frontmatter
    })
  })
  return {
    props: {
      frontmatterEach: frontmatterEach,
    },
  }
}

export default List
