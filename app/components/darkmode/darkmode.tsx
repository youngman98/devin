'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes';

export default function Darkmode() {
  const { theme, setTheme } = useTheme()
  console.log(theme)
  //useEffect(() => setTheme('light'), []);
  return(
    <>
    <div
    className="h-12 w-12 fixed bottom-0 right-0 ml-auto mb-5 mr-2 rounded-full bg-green6 dark:bg-green8" 
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
