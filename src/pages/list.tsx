import fs, {readdirSync, readFile, readFileSync} from 'fs'
import path from 'path'
import {GetStaticProps} from 'next'
import matter from 'gray-matter'
import Layout from '../layouts/index'
import PostList from '../components/PostList'

interface frontmatter {
  title: string
  topic: string
  routename: string
}

const List = ({frontmatterList}: {frontmatterList: frontmatter[][]}) => {
  return (
    <Layout
      meta={{
        title: 'List of Posts 📝',
        description: "Every post ever made under Parker's rule.",
        titleAppendSiteName: true,
      }}
    >
      <PostList frontmatterList={frontmatterList} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postCategoriesDir: string = path.join(
    process.cwd(),
    'src',
    'pages',
    'posts',
  )
  const categories: string[] = fs.readdirSync(postCategoriesDir)
  const frontmatterList = categories.map((category) => {
    const categoryDir = path.join(postCategoriesDir, category)
    const posts = fs.readdirSync(categoryDir)
    const frontMatterPost = posts.map((post) => {
      const postFile = path.join(categoryDir, post)
      return matter(readFileSync(postFile, 'utf-8')).data
    })
    return [...frontMatterPost]
  })
  return {
    props: {
      frontmatterList: frontmatterList,
    },
  }
}

export default List
