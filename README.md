
# BTSChain Smart Contract

**BTSChain** is the native utility token of the BTSC project, implemented on the Binance blockchain adhering to the BEP-20 standard. This repository contains the smart contract code and related documentation, providing a transparent and secure foundation for token operations and ecosystem expansion.

## 🔧 Key Features

- **BEP-20 Compliance**: Built using OpenZeppelin's library to ensure reliability and compatibility.
- **Initial Supply Configuration**: Total supply is set during deployment and allocated to the deployer's address.
- **Burnable Functionality**: Allows token holders to voluntarily burn tokens, reducing total supply.
- **Ownership Transferability**: Enables the transfer of contract ownership to another address.
- **Event Logging**: Logs critical events like `Transfer` and `Approval` for transparency.

## 📄 Contract Information

- **Contract Name**: `BTSChain`
- **Token Symbol**: `BTSC`
- **Decimals**: `18`
- **Total Supply**: `1,200,000,000 BTSC`
- **Deployment Network**: BEP-20 Mainnet
- **Contract Address**: BEP20 : `0x18E596bcEfdd0fF9dC8c50D0b9d329eA770d5eF1`

## 📁 Directory Structure

```bash
iris-token/
├── contracts/             # BEP-20 Smart contract source code
│   └── BTSToken.sol
├── migrations/            # Deployment scripts
│   └── 2_deploy_contracts.js
├── test/                  # Test cases
│   └── BTSToken.test.js
├── .env.example           # Example environment variables
├── truffle-config.js      # Truffle configuration
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

## 🚀 Deployment & Testing

### Environment Setup

1. Install Node.js and npm.
2. Install Truffle globally:
   ```bash
   npm install -g truffle
   ```
3. Install project dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file based on `.env.example` and configure your environment variables.

### Compile Smart Contract

```bash
truffle compile
```

### Deploy Smart Contract(BEP-20)

```bash
truffle migrate --network binance
```

### Run Tests

```bash
truffle test
```

## 🔒 Security & Audit

- **Security Audit**: The BTS Token smart contract has undergone a formal security audit. The audit report is available [here](https://cloud.btschain.net/btschain_audit.pdf).
- **Vulnerability Management**: Identified vulnerabilities have been promptly addressed, with details documented in the [CHANGELOG.md](https://github.com/BTSChains/token-contract/CHANGELOG.md).

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## 📬 Contact & Contributions

- **Email**: manager@btschain.net
- **Official Website**: [https://www.btschain.net](https://www.btschain.net)
- **Contribution Guidelines**: Please refer to [CONTRIBUTING.md](https://github.com/BTSCCHAIN/token-contract/CONTRIBUTING.md) for contribution details.
