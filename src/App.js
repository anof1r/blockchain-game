import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [walletAdress, setWalletAdress] = useState([])

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAdress(accounts)
    }
  }

  return (
    <div className="App">
      <div>
        Account: {walletAdress}
      </div>
      <button onClick={connectWallet}>
        Connect Wallet
      </button>
    </div>
  );
}

export default App;
