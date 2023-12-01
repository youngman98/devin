'use client'

import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Darkmode() {
  const { theme, setTheme } = useTheme()

  return(
    <>
    <div
    className="h-12 w-12 fixed bottom-0 right-0 ml-auto mb-5 mr-2" 
    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <Image
        src={`/images/icon/${theme}-mode.png`}
        alt='darkmode-toggle'
        fill
      />
    </div>
    </>
  )
}
