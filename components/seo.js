import Head from 'next/head';

export default function Seo() {
  const title = 'Codems | Code is poetry';
  const description =
    'Codems is an NFT collection of poems written in code. Each piece is released as an ERC-1155 token and lives on the Polygon blockchain.';

  const metaImageUrl = 'https://codems.vercel.app/meta-image.png';

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} key='desc' />

      {/* opengraph */}
      <meta property='og:title' content={title} key='ogtitle' />
      <meta property='og:description' content={description} key='ogdesc' />

      <meta property='og:image' content={metaImageUrl} key='ogimage' />
      <meta property='og:image:width' content='1920' />
      <meta property='og:image:height' content='1004' />

      {/* twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={metaImageUrl} />
      <meta name='twitter:image:alt' content='Codems banner' />

      {/* favicon */}
      <link rel='shortcut icon' href='/favicon.png' />
    </Head>
  );
}
