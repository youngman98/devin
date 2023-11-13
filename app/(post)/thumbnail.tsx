import Image from 'next/image';

interface Props {
   src: string;
}

export default function Thumbnail({ src }: Props) {
  return (
    <>
      <Image
        src={src}
        alt='post-thumbnail'
        fill
        
      />
    </>
  )
}