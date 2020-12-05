import Link from 'next/link'
import Image from 'next/image'

const Header = () => (
  <header>
    <div className="flex my-5 xl:my-11 justify-between mx-5 py-3 ">
      <Link href="/">
        <div className="flex items-center cursor-pointer ">
          <Image
            src="/images/logo.svg"
            alt="Lordly Logo"
            width={75}
            height={75}
          />
          <h1 className="prose font-serif prose-md sm:prose-2xl hover:text-pink-lord">
            Parker's Digital Domain
          </h1>
        </div>
      </Link>
      <Link href="/list">
        <div className="flex items-center mr-4">
          <Image
            src="/images/list.svg"
            alt="Instagram"
            width={30}
            height={30}
            className="opacity-50 hover:opacity-100 cursor-pointer"
          />
        </div>
      </Link>
    </div>
  </header>
)

export default Header
