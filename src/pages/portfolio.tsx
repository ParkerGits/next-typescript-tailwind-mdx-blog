import PortfolioList from 'components/PortfolioList'
import Layout from '../layouts/index'
import { projects, professionalExperiences } from 'data/portfolio'
import Link from 'next/link'
import jsx from '@emotion/core'

export default function Portfolio() {
  return (
    <Layout
      meta={{
        title: "Parker Landon's Portfolio",
        titleText: "Parker Landon's Portfolio",
        description: 'Everything that Parker has produced and deems worthy!',
        url: 'https://parkerlandon.com/portfolio',
        titleAppendSiteName: true,
        ogImage: {
          url:
            'https://adoring-jackson-1187ff.netlify.app/.netlify/functions/gen-opengraph-image?title=Parker%27s%20Portfolio&tags=parkerlandon.com',
          width: 1200,
          height: 630,
        },
      }}
    >
      <div className="bg-gray-100 dark:bg-gray-700 rounded-md mb-4 text-center ">
        <p className="py-2 font-medium">
          Computer Science, Applied Math, and Honors Student at Seattle Pacific
          University ✨ <br />
          <span className="font-normal italic">
            Expected graduation June 2024
          </span>
          <br />
          <span className="font-normal">
            Read more about me and my journey in my
            <Link href="/bio"> bio section</Link> 👑
          </span>
        </p>
      </div>
      <h2 css={{ marginBottom: '0.5em !important' }}>Projects</h2>
      <PortfolioList
        portfolioItems={projects}
        linksHeader="check it out"
        expandFirst
      />
      <h2 css={{ marginBottom: '0.5em !important' }}>Professional</h2>
      <PortfolioList
        portfolioItems={professionalExperiences}
        linksHeader="read more"
      />
    </Layout>
  )
}
