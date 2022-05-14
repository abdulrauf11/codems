import { useAddress } from '@thirdweb-dev/react';
import { truncateEthAddress } from '../../utils/helper';
import Connect from './connect';
import Disconnect from './disconnect';
import NetworkChecker from './networkChecker';

export default function Wallet() {
  const address = useAddress();

  return (
    <>
      <div className='w-[12rem] lg:w-[14rem]'>
        {address ? (
          <div className='border-2 border-green rounded-xl uppercase flex justify-around'>
            <span className='mx-auto py-2 text-sm lg:text-base lg:py-4'>
              {truncateEthAddress(address)}
            </span>
            <div className='w-[2px] bg-green' />
            <span className='flex mx-2 lg:mx-4'>
              <Disconnect />
            </span>
          </div>
        ) : (
          <Connect />
        )}
      </div>

      <NetworkChecker />
    </>
  );
}
