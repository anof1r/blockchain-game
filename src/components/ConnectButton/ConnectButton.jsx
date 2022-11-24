import React from 'react'

function ConnectButton({ connectWallet }) {
    return (
        <button onClick={connectWallet}>Connect Wallet</button>
    )
}

export default ConnectButton