'use client'

import Link from 'next/link'
import Search from '../components/search'
import Image from 'next/image';
import { useTheme } from 'next-themes';
function Header() {
  const { theme } = useTheme()
  return (
    <div className="h-20 w-full top-0 dark:opacity-90 dark:text-text6 ">
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
      <div onClick={()=>{navigator.clipboard.writeText('youngman0908@naver.com').then(
          () => {
            alert('제 이메일 주소를 복사하셨어요')
          }
        )}}
        className="relative flex gap-1 h-full rounded-md cursor-pointer mx-1 my-0 px-2.5 py-2 dark:bg-background5 dark:hover:bg-green8 bg-background3 hover:bg-green6 hover:text-green1">
        <div>
          <Image
            src={`/images/icon/email-${theme}.png`}
            alt='contact'
            width={30}
            height={10}
          />
        </div>
        <p className="max-[640px]:hidden">Contact</p>
      </div>
      <Link href="https://github.com/youngman98">
        <div className="relative flex gap-1 h-full rounded-md mx-1 my-0 px-2.5 py-2 dark:bg-background5 dark:hover:bg-green8 bg-background3 hover:bg-green6 hover:text-green1">
          <div>
            <Image
              src={`/images/icon/github-${theme}.png`}
              alt='git'
              width={30}
              height={10}
            />
          </div>
          <p className="max-[640px]:hidden">Github</p> 
        </div>
      </Link>
      <Link href="/">
        <div className="relative flex gap-1 h-full rounded-md ml-1 mr-3 my-0 px-2.5 max-[700px]:mr-3 py-2 dark:bg-background5 dark:hover:bg-green8 bg-background3 hover:bg-green6 hover:text-green1">
          <div>
            <Image
              src={`/images/icon/portfolio-${theme}.png`}
              alt='portfolio'
              width={30}
              height={10}
            />
          </div>
          <p className="max-[640px]:hidden">Portfolio</p>
        </div>
      </Link>
    </div>
    </div>
    </div>
  )
}

export default Header
