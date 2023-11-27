import Image from 'next/image';

export default function Darkmode() {
  return(
    <div className="h-12 w-12 fixed bottom-0 right-0 ml-auto mb-5 mr-2">
      <Image
        src={'/images/icon/light-mode.png'}
        alt='darkmode-toggle'
        fill
      />
    </div>
  )
}
