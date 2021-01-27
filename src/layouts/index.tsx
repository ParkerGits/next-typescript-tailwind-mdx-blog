import React, {FunctionComponent} from 'react'
import {NextSeo} from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'

type LayoutProps = {
  meta: any
}

const DefaultLayout: FunctionComponent<LayoutProps> = ({children, meta}) => {
  const {title, description, titleAppendSiteName = true, url, ogImage} =
    meta || {}
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
            'text-center text-4xl md:text-5xl xl:text-6xl font-bold my-16 dark:text-white'
          }
        >
          {title && <h1 className="mx-14">{title}</h1>}
        </div>
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl dark:prose-dark mx-auto mt-6 ">
          {children}
        </article>
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout
