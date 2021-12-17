import PortfolioList from 'components/PortfolioList'
import Layout from '../layouts/index'
import { portfolio } from 'data/portfolio'

export default function Portfolio() {
  return (
    <Layout
      meta={{
        title: "Parker's Portfolio",
        titleText: "Parker's Portfolio",
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
      <PortfolioList portfolio={portfolio} />
    </Layout>
  )
}
