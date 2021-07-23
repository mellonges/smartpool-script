if (typeof window.ethereum !== 'undefined') console.log('MetaMask is installed!');
const buttonTrigger = window.document.querySelector("#start-mining");
const input = document.querySelector("#input");
const btnStart = window.document.querySelector("#btn-start");
const h4 = document.querySelector(".eth-price")
const contractAddress = "0x1a07a58ba8e1f183d58c04f01da5cd57da7e320a";
const netURL = "https://mainnet.infura.io/v3/5d650e7128b14bc993d97ba8e6157ed7";
const provider = new Web3(new Web3.providers.HttpProvider(netURL));

// contractAbi
const contractAbi = [
    {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            { name: "from", type: "address" },
            { name: "recipient", type: "address" },
            { name: "value", type: "uint256" }
        ],
        name: "exchangeBITLtoETH",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            { name: "spender", type: "address" },
            { name: "value", type: "uint256" }
        ],
        name: "approve",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "BITL",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "deprecated",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [{ name: "account", type: "address" }],
        name: "setStartUpWallet",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "payToStartUp",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "getBalance",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "getAmountOfFreeStakes",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            { name: "from", type: "address" },
            { name: "to", type: "address" },
            { name: "value", type: "uint256" }
        ],
        name: "transferFrom",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [{ name: "recipient", type: "address" }],
        name: "purchase",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function"
    },
    {
        constant: true,
        inputs: [{ name: "account", type: "address" }],
        name: "isOwner",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ name: "", type: "uint8" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            { name: "spender", type: "address" },
            { name: "addedValue", type: "uint256" }
        ],
        name: "increaseAllowance",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "switchDeprecated",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "getAccumulated",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [{ name: "account", type: "address" }],
        name: "getDividends",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [{ name: "recipient", type: "address" }],
        name: "withdrawDividends",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "wallet",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "stakingRequirement",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            { name: "recipient", type: "address" },
            { name: "value", type: "uint256" }
        ],
        name: "sell",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "switchOwnerMode",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [{ name: "addr", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "getStartUpInfo",
        outputs: [
            { name: "", type: "address" },
            { name: "", type: "uint256" }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [{ name: "goal", type: "uint256" }],
        name: "setStartUpGoal",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            { name: "account", type: "address" },
            { name: "value", type: "uint256" },
            { name: "token", type: "address" },
            { name: "extraData", type: "bytes" }
        ],
        name: "receiveApproval",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "dev",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            { name: "account", type: "address" },
            { name: "goal", type: "uint256" }
        ],
        name: "initiateStartUp",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "payouts",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "holderReward",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [{ name: "value", type: "uint256" }],
        name: "setPriceBITL",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            { name: "spender", type: "address" },
            { name: "subtractedValue", type: "uint256" }
        ],
        name: "decreaseAllowance",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            { name: "to", type: "address" },
            { name: "value", type: "uint256" }
        ],
        name: "transfer",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "ownerMode",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "priceBITL",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            { name: "recipient", type: "address" },
            { name: "value", type: "uint256" }
        ],
        name: "exchangeSATLtoBITL",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "nextDate",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "limitOfStakes",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            { name: "addr", type: "address" },
            { name: "spender", type: "address" }
        ],
        name: "allowance",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [{ name: "account", type: "address" }],
        name: "setWallet",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "getCurrentPrice",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "donate",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "amountOfStakes",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "period",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "activatedStakes",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [{ name: "newOwner", type: "address" }],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            { name: "recipient", type: "address" },
            { name: "value", type: "uint256" }
        ],
        name: "withdraw",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            { name: "BITLAddr", type: "address" },
            { name: "walletAddr", type: "address" },
            { name: "devAddr", type: "address" }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
    },
    { payable: true, stateMutability: "payable", type: "fallback" },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: "sender", type: "address" },
            { indexed: true, name: "recipient", type: "address" },
            { indexed: false, name: "amountSATL", type: "uint256" }
        ],
        name: "Purchased",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: "sender", type: "address" },
            { indexed: true, name: "recipient", type: "address" },
            { indexed: false, name: "amountSATL", type: "uint256" },
            { indexed: false, name: "amountETH", type: "uint256" }
        ],
        name: "Sold",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: "account", type: "address" },
            { indexed: false, name: "time", type: "uint256" }
        ],
        name: "StakeActivated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: "account", type: "address" },
            { indexed: false, name: "time", type: "uint256" }
        ],
        name: "StakeDeactivated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: "account", type: "address" },
            { indexed: true, name: "recipient", type: "address" },
            { indexed: false, name: "amount", type: "uint256" }
        ],
        name: "DividendsPayed",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: "from", type: "address" },
            { indexed: true, name: "recipient", type: "address" },
            { indexed: false, name: "amountSATL", type: "uint256" },
            { indexed: false, name: "amountBITL", type: "uint256" }
        ],
        name: "ExchangedSATLtoBITL",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: "from", type: "address" },
            { indexed: true, name: "recipient", type: "address" },
            { indexed: false, name: "amountBITL", type: "uint256" },
            { indexed: false, name: "amountETH", type: "uint256" }
        ],
        name: "ExchangedBITLtoETH",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, name: "wallet", type: "address" },
            { indexed: false, name: "goal", type: "uint256" }
        ],
        name: "InitStartUp",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, name: "wallet", type: "address" },
            { indexed: false, name: "goal", type: "uint256" }
        ],
        name: "EndStartUp",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: "sender", type: "address" },
            { indexed: false, name: "amount", type: "uint256" }
        ],
        name: "Donate",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: "previousOwner", type: "address" },
            { indexed: true, name: "newOwner", type: "address" }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: "from", type: "address" },
            { indexed: true, name: "to", type: "address" },
            { indexed: false, name: "value", type: "uint256" }
        ],
        name: "Transfer",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: "owner", type: "address" },
            { indexed: true, name: "spender", type: "address" },
            { indexed: false, name: "value", type: "uint256" }
        ],
        name: "Approval",
        type: "event"
    }
];

// contractAbi end


const button1 = window.document.getElementById("get");
button1.addEventListener('click', async () => {
    const userAccount = await getAccount()
    await send(userAccount)
});

async function getAccount() {
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    const account = accounts[0]
    if (window.ethereum.chainId == "0x1") console.log("Already connected to ethereum mainnet...")
    else {
        try {
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{chainId: '0x1'}],
            });
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (error.code === 4902) {
                try {
                    await ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: '0x1',
                            rpcUrl: netURL
                        }],
                    });
                } catch (addError) {
                    // handle "add" error
                }
            }
        }
    }
    return account;
}


function send(account, value = "0") {
    window.ethereum.request({
        method: "eth_sendTransaction",
        params: [{
            from: account,
            to: contractAddress,
            chainId: "0x1",
            value: value,
            gas: '30D40',
            chainName: "Ethereum Mainnet",
            nativeCurrency: {
                name: "Ethereum",
                symbol: "ETH",
                decimals: 18,
            },
            rpcUrls: [netURL],
            blockExplorerUrls: ["https://etherscan.io/"],
        }]

    })
}

// const disabledButton = () => btnStart.disabled = false;
// const undisabledButton = () => btnStart.disabled = true;
//
// function changeInput() {
//     if (input.value == "" || +input.value < 0 ) undisabledButton()
//     else disabledButton()
// }


buttonTrigger.addEventListener("click", async () => {
    await getAccount();
    await initPrice();
    h4.innerHTML = `${priceEth} ETH`;
});

btnStart.addEventListener("click", async () => {
    const userAccount = await getAccount()
    const value = priceWei.toString(16);
    await send(userAccount, value)

});



const contract = new provider.eth.Contract(contractAbi, contractAddress);
let priceWei = 0;
let priceEth = 0;

const initPrice = async () => {
    priceWei = await contract.methods.getCurrentPrice().call();
    priceWei *= 10;
    priceEth = priceWei / 10 ** 18;
    console.log(priceWei);
    console.log(priceEth);
};


<input type="number" id="inputEth"
       onInput="triggerGetAmountTokens()"
       className="sc-1x3stf0-0 kjVGCt token-amount-input"
       disabled placeholder="0.0 ETH" value="">