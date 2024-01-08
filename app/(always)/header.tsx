'use client'

import Link from 'next/link'
import Search from '../components/search'
import Image from 'next/image';
import { useTheme } from 'next-themes';
function Header() {
  const { theme } = useTheme()
  return (
    <div className="h-20 w-full top-0 dark:opacity-90">
    <div className="flex truncate flex-row justify-between items-center box-border h-16 w-full">
      <Link href="/">
        <div className="relative h-16 w-60 top-3">
          <Image
            src={`/images/logo/logo-${theme}.png`}
            alt='logo'
            width={200}
            height={100}
          />
        </div>
      </Link>
    <div className="flex items-center">
      <Link href="/">
        <div className="relative flex gap-1 h-full rounded-md mx-1 my-0 px-2.5 py-2.5 dark:bg-background5 dark:hover:bg-green8 bg-background3 hover:bg-green6 hover:text-green1">
          <Image
            src={`/images/icon/email-${theme}.png`}
            alt='git'
            width={30}
            height={10}
          />
          Contact
        </div>
      </Link>
      <Link href="https://github.com/youngman98">
        <div className="relative flex gap-1 h-full rounded-md mx-1 my-0 px-2.5 py-2.5 dark:bg-background5 dark:hover:bg-green8 bg-background3 hover:bg-green6 hover:text-green1">
          <Image
            src={`/images/icon/github-${theme}.png`}
            alt='git'
            width={30}
            height={10}
          />
          Github
        </div>
      </Link>
      <Link href="/">
        <div className="relative flex gap-1 h-full rounded-md mx-1 my-0 px-2.5 py-2.5 dark:bg-background5 dark:hover:bg-green8 bg-background3 hover:bg-green6 hover:text-green1">
          <Image
            src={`/images/icon/portfolio-${theme}.png`}
            alt='git'
            width={30}
            height={10}
          />
          Portfolio
        </div>
      </Link>
    </div>
    </div>
    </div>
  )
}

export default Header
