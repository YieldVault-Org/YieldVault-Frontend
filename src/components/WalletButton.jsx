import { useWallet } from '../hooks/useWallet.js';
import { shortenAddress } from '../utils/format.js';
import Button from './Button.jsx';

/**
 * Connect/disconnect control for the mock Stellar wallet. Shows the
 * shortened address once connected.
 */
export default function WalletButton() {
  const { isConnected, address, connecting, connect, disconnect } = useWallet();

  if (isConnected) {
    return (
      <div className="wallet-button">
        <span className="wallet-address" title={address}>
          {shortenAddress(address)}
        </span>
        <Button variant="ghost" onClick={disconnect}>
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <Button onClick={connect} loading={connecting}>
      Connect Wallet
    </Button>
  );
}
