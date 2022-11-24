import React, { useState } from 'react'
import './App.css';
import ConnectButton from './components/ConnectButton/ConnectButton';

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
        Account: {walletAdress && walletAdress}
      </div>
      <ConnectButton connectWallet={connectWallet} />
    </div>
  );
}

export default App;
