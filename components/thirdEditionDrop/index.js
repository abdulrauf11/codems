import React, { useState, useEffect } from 'react';
import { useEditionDrop } from '@thirdweb-dev/react';
import { EDITION_DROP_CONTRACT_ADRESS } from '../../config';
import ClaimButton from './claimButton';
import Price from './price';
import Supply from './supply';
import TokenImage from './tokenImage';
import GridLoader from './gridLoader';
import Alert from '../alert';
import { RenderError } from '../alert/error';

export default function ThirdEditionDrop() {
  const contract = useEditionDrop(EDITION_DROP_CONTRACT_ADRESS);

  const [nfts, setNfts] = useState([]);
  const [claimConditions, setClaimConditions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [transaction, setTransaction] = useState({
    hash: '',
    error: null,
  });
  const { hash, error } = transaction;

  useEffect(() => {
    async function fetchNfts() {
      try {
        const allNfts = await contract?.getAll();
        setNfts(allNfts);
      } catch (error) {
        console.log('Failed to get NFTs. Error: ', error);
      }
    }
    fetchNfts();
  }, [contract]);

  useEffect(() => {
    if (!nfts.length) return;

    async function fetchClaimConditions(id) {
      try {
        const { price, currencyMetadata, maxQuantity } =
          await contract?.claimConditions.getActive(id);

        return {
          price,
          currency: currencyMetadata.symbol,
          maxQuantity: maxQuantity,
        };
      } catch (error) {
        console.log('Failed to get claim conditions. Error: ', error);
      }
    }

    const promisesArray = nfts.map((nft) =>
      fetchClaimConditions(nft.metadata.id)
    );
    Promise.all(promisesArray).then((values) => {
      setClaimConditions(values);
    });
  }, [contract, nfts]);

  async function claim(id, quantity) {
    setLoading(true);
    setTransaction({ hash: '', error: null });
    try {
      const result = await contract?.claim(id, quantity);
      console.log(result);
      const txHash = result.receipt.transactionHash;
      setTransaction({ hash: txHash, error: null });
      // temp supply change
      const newNfts = [
        ...nfts.slice(0, id),
        { ...nfts[id], supply: `${parseInt(nfts[id].supply) + quantity}` },
        ...nfts.slice(id + 1),
      ];
      setNfts(newNfts);
    } catch (error) {
      console.log(error);
      let errorCode;
      if ('code' in error) errorCode = error.code;
      // issues with insufficient funds error code
      else if (error.reason?.includes('insufficient funds')) errorCode = -32000;
      setTransaction({ hash: '', error: errorCode });
    }
    setLoading(false);
  }

  return (
    <div className='grid grid-cols-3 gap-10'>
      {nfts.length ? (
        nfts.map((nft, index) => (
          <div key={nft.metadata.id} className='border'>
            <TokenImage
              src={nft.metadata.image}
              alt={nft.metadata.description}
            />
            <div>
              <div className='p-4 border-t text-xl font-heading text-center'>
                {nft.metadata.name}
              </div>
              <div className='grid grid-cols-2 border-t border-b'>
                <Price
                  price={claimConditions[index]?.price}
                  quantity={1}
                  currency={claimConditions[index]?.currency}
                />
                <Supply
                  claimed={nft.supply}
                  total={claimConditions[index]?.maxQuantity}
                />
              </div>

              <ClaimButton
                claim={() => claim(nft.metadata.id, 1)}
                busy={loading}
              />
            </div>
          </div>
        ))
      ) : (
        <GridLoader />
      )}

      {hash && (
        <Alert type='success'>
          <p>Your NFT was minted! See transaction hash: ${hash}</p>
        </Alert>
      )}
      {error !== null && (
        <Alert type='error'>
          <RenderError code={error} />
        </Alert>
      )}
    </div>
  );
}
