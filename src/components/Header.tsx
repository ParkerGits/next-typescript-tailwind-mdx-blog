import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Header = () => {
  const { theme, setTheme } = useTheme()
  const [isDark, setDark] = useState(false)
  useEffect(() => setDark(theme === 'dark'), [theme])
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
          <Image
            src={isDark ? '/images/light-mode.svg' : '/images/dark-mode.svg'}
            alt={`${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            width={30}
            height={30}
            className="opacity-50 hover:opacity-100 cursor-pointer"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            loading="eager"
          />
          <Link href="/list" passHref>
            <div className="flex align-middle">
              <Image
                src={
                  theme === 'dark'
                    ? '/images/list-dark.svg'
                    : '/images/list.svg'
                }
                alt="Post List"
                width={30}
                height={30}
                className="opacity-50 hover:opacity-100 cursor-pointer"
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
