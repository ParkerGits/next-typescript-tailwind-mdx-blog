import {readdirSync, readFileSync} from 'fs'
import matter from 'gray-matter'
import path from 'path'
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

export async function getServerSideProps() {
  const posts = './src/pages/posts'
  const dir = path.resolve(posts)
  const folders = readdirSync(dir)
  let frontmatterEach = folders.map((folder) => {
    let files: string[] = readdirSync(posts + '/' + folder)
    return files.map((file) => {
      let content = readFileSync(posts + '/' + folder + '/' + file, 'utf8')
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
