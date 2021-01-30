import Link from 'next/link'
import Image from 'next/image'
import {useTheme} from 'next-themes'

const Header = () => {
  const {theme, setTheme} = useTheme()
  return (
    <header>
      <div className="flex my-5 xl:my-11 justify-between mx-1 md:mx-5 py-3 ">
        <Link href="/">
          <div className="flex items-center cursor-pointer ">
            <Image
              src="/images/logo.svg"
              alt="Lordly Logo"
              width={75}
              height={75}
            />
            <h1 className="prose dark:prose-dark font-serif prose-md sm:prose-2xl hover:text-pink-lord hidden sm:block">
              Parker's Digital Domain
            </h1>
          </div>
        </Link>
        <div className="flex items-center mr-2">
          <Image
            src={
              theme === 'dark'
                ? '/images/light-mode.svg'
                : '/images/dark-mode.svg'
            }
            alt="Post List"
            width={30}
            height={30}
            className="opacity-50 hover:opacity-100 cursor-pointer"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          />
          <Link href="/list">
            <Image
              src={
                theme === 'dark' ? '/images/list-dark.svg' : '/images/list.svg'
              }
              alt="Post List"
              width={30}
              height={30}
              className="opacity-50 hover:opacity-100 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
