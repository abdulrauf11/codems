import { useEffect, useState } from 'react';
import { useNFTDrop } from '@thirdweb-dev/react';
import Quantity from './quantity';
import Supply from './supply';
import Price from './price';
import ClaimButton from './claimButton';
import Alert from '../alert';
import { NFT_DROP_CONTRACT_ADRESS } from '../../config';
import { RenderError } from '../alert/error';

export default function ThirdNFTDrop() {
  const contract = useNFTDrop(NFT_DROP_CONTRACT_ADRESS);

  const [quantity, setQuantity] = useState(1);

  const [claimConditions, setClaimConditions] = useState({
    price: undefined,
    currency: undefined,
    maxLimit: undefined,
  });
  const { price, currency, maxLimit } = claimConditions;

  const [supply, setSupply] = useState({
    claimed: undefined,
    total: undefined,
  });

  const [loading, setLoading] = useState(false);
  const [transaction, setTransaction] = useState({
    hash: '',
    error: null,
  });
  const { hash, error } = transaction;

  useEffect(() => {
    async function fetchClaimConditions() {
      try {
        const { price, quantityLimitPerTransaction, currencyMetadata } =
          await contract?.claimConditions.getActive();
        setClaimConditions({
          price,
          currency: currencyMetadata.symbol,
          maxLimit: quantityLimitPerTransaction,
        });
      } catch (error) {
        console.log('Failed to get claim conditions. Error: ', error);
      }
    }

    async function fetchSupply() {
      try {
        const claimed = parseInt(await contract?.totalClaimedSupply());
        const unclaimed = parseInt(await contract?.totalUnclaimedSupply());
        setSupply({ claimed, total: claimed + unclaimed });
      } catch (error) {
        console.log('Failed to get supply. Error: ', error);
      }
    }

    fetchClaimConditions();
    fetchSupply();
  }, [contract]);

  async function claim() {
    setLoading(true);
    setTransaction({ hash: '', error: null });

    try {
      const result = await contract.claim(quantity);
      console.log(result);
      const txHash = result[0].receipt.transactionHash;
      setTransaction({ hash: txHash, error: null });
      // temp supply change
      setSupply({ ...supply, claimed: supply.claimed + quantity });
    } catch (error) {
      console.log(error);
      let errorCode;
      if ('code' in error) errorCode = error.code;
      // issues with insufficient funds error code
      else if (error.reason.includes('insufficient funds')) errorCode = -32000;
      setTransaction({ hash: '', error: errorCode });
    }

    setLoading(false);
  }

  return (
    <div className='flex justify-center'>
      <div className='form border items-center rounded-lg w-1/3'>
        {/* quantity */}
        <Quantity
          count={quantity}
          max={maxLimit}
          set={setQuantity}
          disabled={loading || !price}
        />
        <div className='grid grid-cols-2 border-b'>
          {/* price */}
          <Price price={price} quantity={quantity} currency={currency} />
          {/* supply */}
          <Supply claimed={supply?.claimed} total={supply?.total} />
        </div>
        {/* mint button */}
        <ClaimButton claim={claim} busy={loading} />
      </div>

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
