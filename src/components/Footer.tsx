import Link from 'next/link'
import Image from 'next/image'

const Footer = () => (
  <header>
    <div className="flex items-center my-5 xl:my-11 justify-between mx-5 pt-3 ">
      <div>
        <p className="text-black text-opacity-50">Parker Landon &copy; 2020</p>
        <address className="not-italic text-black text-opacity-50 hover:text-opacity-100">
          <a href="mailto:parkerjlandon@gmail.com">parkerjlandon@gmail.com</a>
        </address>
      </div>
      <div className="flex">
        <a
          href="https://www.instagram.com/parkerlandon_/"
          target="_blank"
          className="flex items-center px-1"
        >
          <Image
            src="/images/instagram.svg"
            alt="Instagram"
            width={40}
            height={40}
            className="opacity-50 hover:opacity-100"
          />
        </a>
        <a
          href="https://twitter.com/LordPrkr"
          target="_blank"
          className="flex items-center px-1"
        >
          <Image
            src="/images/twitter.svg"
            alt="Twitter"
            width={40}
            height={40}
            className="opacity-50 hover:opacity-100"
          />
        </a>
        <a
          href="https://github.com/ParkerGits"
          target="_blank"
          className="flex items-center px-1"
        >
          <Image
            src="/images/github.svg"
            alt="GitHub"
            width={40}
            height={40}
            className="opacity-50 hover:opacity-100"
          />
        </a>
      </div>
    </div>
  </header>
)

export default Footer
