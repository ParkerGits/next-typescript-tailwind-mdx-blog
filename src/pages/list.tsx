import fs, { readFileSync } from 'fs'
import path from 'path'
import { GetStaticProps } from 'next'
import matter from 'gray-matter'
import Layout from '../layouts/index'
import PostList from '../components/PostList'

export interface PostFrontmatter {
  title: string
  topic: 'programming' | 'personal' | 'egghead-notes'
  routename: string
  description: string
  postnum: number
}

const List = ({ frontmatterList }: { frontmatterList: PostFrontmatter[] }) => {
  return (
    <Layout
      meta={{
        title: 'List of Posts',
        titleText: 'List of Posts',
        description: "Every post ever made under Parker's rule.",
        url: 'https://parkerlandon.com/list',
        titleAppendSiteName: true,
        ogImage: {
          url:
            'https://adoring-jackson-1187ff.netlify.app/.netlify/functions/gen-opengraph-image?title=List%20of%20Posts&tags=parkerlandon.com',
          width: 1200,
          height: 630,
        },
      }}
    >
      <PostList frontmatterList={frontmatterList} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let orderedPostFrontmatter: any[] = []
  const postCategoriesDir: string = path.join(
    process.cwd(),
    'src',
    'pages',
    'posts',
  )
  const categories: string[] = fs.readdirSync(postCategoriesDir)
  for (let i = 0; i < categories.length; i++) {
    const categoryDir = path.join(postCategoriesDir, categories[i])
    const posts = fs.readdirSync(categoryDir)
    for (let j = 0; j < posts.length; j++) {
      const postFile = path.join(categoryDir, posts[j])
      orderedPostFrontmatter.push(matter(readFileSync(postFile, 'utf-8')).data)
    }
  }
  orderedPostFrontmatter.sort((a, b) => b.postnum - a.postnum)
  return {
    props: {
      frontmatterList: orderedPostFrontmatter,
    },
  }
}

export default List
