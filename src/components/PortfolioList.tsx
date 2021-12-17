import type { PortfolioItem } from 'data/portfolio'

export default function PortfolioList({
  portfolio,
}: {
  portfolio: PortfolioItem[]
}) {
  return (
    <div className="flex flex-col gap-2">
      {portfolio.map((portfolioItem) => (
        <details className="p-1 rounded-xl open:bg-gray-50 dark:open:bg-gray-700">
          <summary className="open:text-center">
            {portfolioItem.emoji}{' '}
            <span className="font-semibold">{portfolioItem.title}</span>
          </summary>
          <p
            className="px-2"
            css={{
              marginTop: '0.5rem !important',
              marginBottom: '0.5rem !important',
            }}
          >
            {portfolioItem.description}
          </p>
          <div className="my-1">
            <span className="leading-none">
              ✨<span className="font-semibold"> check it out</span>
            </span>
            <ul>
              {portfolioItem.links.map((link) => (
                <li css={{ margin: '0 !important' }}>
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  )
}
