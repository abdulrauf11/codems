import { useAddress } from '@thirdweb-dev/react';
import { truncateEthAddress } from '../../utils/helper';
import Connect from './connect';
import Disconnect from './disconnect';

export default function Wallet() {
  const address = useAddress();

  return (
    <>
      {address ? (
        <div className='border flex items-center rounded-md'>
          <span className='border-r p-2'>{truncateEthAddress(address)}</span>
          <Disconnect />
        </div>
      ) : (
        <Connect />
      )}
    </>
  );
}
