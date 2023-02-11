import Image from 'next/image'
import { useTheme } from 'next-themes'
import GitHubIcon from './SVG/GitHub'
import TwitterIcon from './SVG/Twitter'
import LinkedInIcon from './SVG/LinkedIn'
const Footer = () => {
  const { theme, setTheme } = useTheme()
  return (
    <header>
      <div className="flex items-center my-5 xl:my-11 justify-between mx-5 pt-3 ">
        <div>
          <p className="text-black dark:text-gray-300 text-opacity-50">
            Parker Landon &copy; {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex h-9 gap-1">
          <TwitterIcon />
          <LinkedInIcon />
          <GitHubIcon />
        </div>
      </div>
    </header>
  )
}

export default Footer
