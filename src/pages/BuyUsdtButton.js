import React, {useState} from "react";
import { useWeb3React } from "@web3-react/core"
import { injected } from "./components/wallet/Connectors";
// import{injected}  from "../"

import Button from "@restart/ui/esm/Button";

console.log("ppppp")


export default function BuyUsdtButton() {
    const { active, account, library, connector, activate, deactivate } = useWeb3React()
    async function connect() {
        try {
          await activate(injected)
        } catch (ex) {
          console.log(ex)
        }
    }
      async function disconnect() {
        try {
          deactivate()
        } catch (ex) {
          console.log(ex)
        }
      }
    
    // const { active, account, library, connector, activate, deactivate } = useWeb3React()
    // const [connected_status, connected_statusState] = useState(false);

    // const Web3 = require("web3");
    // const ethEnabled = () => {
    // if (window.web3) {
    // window.web3 = new Web3(window.web3.currentProvider);
    // window.ethereum.enable();
    // return true;
    // }
    // return false;
    // }
    // const ethereum = window.ethereum
    // console.log("ethereum",ethereum)

    // const connectWallet = async () => {
    //     console.log("bulbul")
    //     const ethereum = window.ethereum
    //     console.log("ethereum",ethereum)
    //     const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    //   }
    // async function connectWallet() {
    //     window.ethereum.enable();
    //     const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    //     console.log(accounts,'sdfkhashdf');
    //     connected_statusState(true);s
    //     document.getElementById('status_metamask').innerText = accounts[0];
       
    //     }
    return (
        <>
             <div className="flex flex-col items-center justify-center">
                <button onClick={connect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Connect to MetaMask</button>
                {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
                <button onClick={disconnect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Disconnect</button>
            </div>
           {/* <button className="btn btn-light text-dark" onClick={connectWallet}>Connect</button> */}
            {/* <button onClick={connect} className="connect_wallet_btn">Connect Wallet</button>
            {connected_status? <span >Connected with <b id="status_metamask"></b></span> : <span >Not connected</span>}     */}
            {/* <Button
                onClick={connectWallet}
                style={{
                id: 'metamaskbtn',
                gridArea: 'web3',
                fontSize: '60%',
                border: 'solid 1px #174666',
                background: '#E36E1A',
                borderRadius: '3px',
                placeSelf: 'center'
                }}>
                Connect Wallet
            </Button> */}
        </>
    )
  } 
  