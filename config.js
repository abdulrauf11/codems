import { ChainId } from '@thirdweb-dev/react';

// This is the chainId your dApp will work on.
const ACTIVE_CHAIN_ID = ChainId.Polygon;
const ACTIVE_CHAIN_NAME = ChainId[ACTIVE_CHAIN_ID];

const EDITION_DROP_CONTRACT_ADRESS =
  '0xbEA384E6d3F249cfE683Ef9C21ee68DF64867974';

export { EDITION_DROP_CONTRACT_ADRESS, ACTIVE_CHAIN_ID, ACTIVE_CHAIN_NAME };
