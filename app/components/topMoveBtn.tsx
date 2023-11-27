'use client'

import Image from 'next/image'

export default function TopMoveBtn() {
  const topMove = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }
  return(
    <div className="h-12 w-12 fixed bg-green6 rounded-full bottom-0 right-14 ml-auto mb-5 mr-2 cursor-pointer"
     onClick={topMove}>
      <Image
        src={'/images/icon/up.png'}
        alt='topMove'
        width={100}
        height={100}
      />
    </div>
  )
}