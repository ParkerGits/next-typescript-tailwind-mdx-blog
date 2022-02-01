import PortfolioList from 'components/PortfolioList'
import Layout from '../layouts/index'
import { portfolio } from 'data/portfolio'

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
        <p className="py-2">
          Computer Science, Applied Math, and Honors Student at Seattle Pacific
          University ✨
          <br /> Self-Taught Web Developer 🧙‍♂️
        </p>
      </div>
      <PortfolioList portfolio={portfolio} />
    </Layout>
  )
}
