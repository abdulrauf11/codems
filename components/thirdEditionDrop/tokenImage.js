import Image from 'next/image';

export default function TokenImage({ src, alt }) {
  return (
    <div>
      <Image src={src} alt={alt} layout='responsive' width={512} height={512} />
    </div>
  );
}
