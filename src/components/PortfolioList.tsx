import type { PortfolioItem } from 'data/portfolio'
import Image from 'next/image'
import { useState } from 'react'
export default function PortfolioList({
  portfolio,
}: {
  portfolio: PortfolioItem[]
}) {
  const [expandImage, setExpandImage] = useState<number | null>(null)
  return (
    <div className="flex flex-col gap-2">
      {portfolio.map((portfolioItem, index) => (
        <details
          open={index === 0}
          className="p-1 rounded-xl open:bg-gray-100 dark:open:bg-gray-700"
        >
          <summary className="open:text-center">
            {portfolioItem.emoji}{' '}
            <span className="font-semibold">{portfolioItem.title}</span>
          </summary>
          {portfolioItem.images && (
            <div
              className={`flex gap-2 cursor-pointer mx-2 ${
                expandImage === index ? 'flex-col' : 'flex-row'
              }`}
              onClick={() =>
                setExpandImage(expandImage === index ? null : index)
              }
            >
              {portfolioItem.images.map((image) => (
                <Image src={image} className="rounded-xl" />
              ))}
            </div>
          )}
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
                  <a href={link.url} target="_blank">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  )
}
