import Image from 'next/image';

export default function TokenImage({ src, alt }) {
  return (
    <div>
      <Image src={src} alt={alt} width={500} height={500} />
    </div>
  );
}
