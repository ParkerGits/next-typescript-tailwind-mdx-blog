import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import DarkModeIcon from './SVG/DarkMode'
import LightModeIcon from './SVG/LightMode'
import ListIcon from './SVG/List'

const Header = () => {
  const { theme, setTheme } = useTheme()
  return (
    <header>
      <div className="flex my-3 xl:my-5 justify-between mx-1 md:mx-5 py-3 ">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer ">
            <Image
              src="/images/logo.svg"
              alt="Lordly Logo"
              width={75}
              height={75}
            />
            <h1 className="text-black dark:text-white font-serif prose-md sm:prose-2xl hover:text-pink-lord hover:dark:text-pink-lord hidden sm:block">
              Parker's Digital Domain
            </h1>
          </div>
        </Link>
        <div className="flex items-center mr-2">
          {theme === 'dark' ? (
            <LightModeIcon onClick={() => setTheme('light')} />
          ) : (
            <DarkModeIcon onClick={() => setTheme('dark')} />
          )}
          <Link href="/list" passHref>
            <div className="flex align-middle">
              <ListIcon />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
