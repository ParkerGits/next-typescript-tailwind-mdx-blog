import type { PortfolioItem } from 'data/portfolio'
import Image from 'next/image'
import { useState } from 'react'
export default function PortfolioList({
  portfolioItems,
  expandFirst,
  linksHeader,
}: {
  portfolioItems: PortfolioItem[]
  expandFirst?: boolean
  linksHeader: string
}) {
  const [expandImage, setExpandImage] = useState<{
    index: number
    num: number
  } | null>(null)
  return (
    <div className="flex flex-col gap-2">
      {portfolioItems.map((portfolioItem, index) => (
        <details
          open={expandFirst && index === 0}
          className="p-1 rounded-xl open:bg-gray-100 dark:open:bg-gray-700"
        >
          <summary className="open:text-center">
            {portfolioItem.emoji}{' '}
            <span className="font-semibold">{portfolioItem.title}</span>
          </summary>
          {portfolioItem.images && (
            <div
              className={`flex gap-2 cursor-pointer mx-2 ${
                expandImage && expandImage.index === index
                  ? expandImage.num == 0
                    ? 'flex-col'
                    : 'flex-col-reverse'
                  : 'flex-row'
              }`}
            >
              {portfolioItem.images.map((image, num) => (
                <Image
                  placeholder="blur"
                  src={image}
                  className="rounded-xl object-cover"
                  onClick={() =>
                    setExpandImage(
                      expandImage && expandImage.index === index
                        ? null
                        : { index, num },
                    )
                  }
                />
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
              ✨ <span className="font-semibold">{linksHeader}</span>
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
