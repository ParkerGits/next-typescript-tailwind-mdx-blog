import React, { FunctionComponent } from 'react'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'

type LayoutProps = {
  meta: any
}

const DefaultLayout: FunctionComponent<LayoutProps> = ({ children, meta }) => {
  const {
    title,
    titleText,
    titleEmoji,
    description,
    titleAppendSiteName = true,
    url,
    ogImage,
  } = meta || {}
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        titleTemplate={titleAppendSiteName ? undefined : '%s'}
        openGraph={{
          title,
          description,
          url,
          images: ogImage ? [ogImage] : undefined,
        }}
        canonical={url}
      />

      <div className="max-w-screen-lg mx-auto">
        <Header />
        <div
          className={
            title &&
            'text-center text-4xl md:text-5xl xl:text-6xl xl:my-10 dark:text-white'
          }
        >
          {title && (
            <h1 className="mx-14">
              <span className="font-semibold">{titleText}</span>
              {titleEmoji ? ` ${titleEmoji}` : ''}
            </h1>
          )}
        </div>
        <article className="prose dark:prose-dark lg:prose-lg px-5 lg:px-0 mx-auto mt-6 max-w-3xl">
          {children}
        </article>
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout
