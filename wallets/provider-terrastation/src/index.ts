import {
  WalletType,
  CanSwitchNetwork,
  Connect,
  Subscribe,
  WalletSigners,
  BlockchainMeta,
  WalletInfo,
} from '@rango-dev/wallets-shared';
import { terraStation as terraStation_instance } from './helpers';
import signer from './signer';
import { ConnectType } from '@terra-money/wallet-controller';

const WALLET = WalletType.TERRA_STATION;
const TERRA_STATION_WALLET_ID = 'station';

export const config = {
  type: WALLET,
};

async function waitInterval(instance: any) {
  return new Promise<any>((resolve) => {
    const interval = setInterval(async () => {
      resolve(instance.extension.getLastStates());
      clearInterval(interval);
    }, 2000);
  });
}

export const getInstance = terraStation_instance;
export const connect: Connect = async ({ instance }) => {
  let accounts: string[] = [];
  let chainId = '';
  await instance.connect(ConnectType.EXTENSION, TERRA_STATION_WALLET_ID);
  await instance.refetchStates();
  const { network, wallet } = await waitInterval(instance);

  chainId = network.chainID;
  accounts = [wallet.terraAddress];

  return { accounts, chainId };
};

export const subscribe: Subscribe = ({
  instance,
  updateAccounts,
  updateChainId,
}) => {
  instance.states().subscribe({
    next: (value: any) => {
      console.log(value);
      if (value.status === 'WALLET_CONNECTED') {
        const accounts = value.wallets.map(
          ({ terraAddress }: any) => terraAddress
        );
        updateAccounts(accounts);
        updateChainId(value.network.chainID);
      }
    },
  });
};

export const canSwitchNetworkTo: CanSwitchNetwork = () => false;

export const getSigners: (provider: any) => WalletSigners = signer;

export const getWalletInfo: (allBlockChains: BlockchainMeta[]) => WalletInfo = (
  _allBlockChains
) => {
  return {
    name: 'SafePal',
    img: 'https://raw.githubusercontent.com/rango-exchange/rango-types/main/assets/icons/wallets/terra-station.png',
    installLink: {
      CHROME:
        'https://chrome.google.com/webstore/detail/terra-station/aiifbnbfobpmeekipheeijimdpnlpgpp',
      BRAVE:
        'https://chrome.google.com/webstore/detail/safepal-extension-wallet/lgmpcpglpngdoalbgeoldeajfclnhafa',
      FIREFOX:
        'https://addons.mozilla.org/en-US/firefox/addon/safepal-extension-wallet',
      DEFAULT: 'https://www.safepal.com/download',
    },
    color: '#4A21EF',
    supportedChains: [],
  };
};