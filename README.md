# react-ethereum-metacoin

> a simple dapp

## Overview

* It is basically a decentralized dapp done using `react` and `truffle` that implements interface [EIP20](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md) as an [ethereum smart contract](http://truffleframework.com/docs/getting_started/contracts) (Solidity)

* [Tokens](https://www.ethereum.org/token) in the ethereum ecosystem can represent any fungible tradable good: `coins`, `loyalty points`, `gold certificates`, `IOUs`, `in game items`, etc. Since all tokens implement some basic features in a standard way, this also means that it will be instantly compatible with the ethereum wallet and any other client or contract that uses the same standards.

* It makes some basic token transactions, transaction are ether free as of now.

* It allows to transfer tokens from the coinbase ( initial supply 10000 ) and from differents accounts.

* This one can be considered as opinionated versions of [react-ethereum-dapp-template](https://github.com/uzyn/react-ethereum-dapp-template) and [truffle-webpack-demo](https://github.com/ConsenSys/truffle-webpack-demo), intended for personal purposes, PRs, feedback, stars ✭ and issue reporting, welcome.


## Getting started

JSON-RPC node should be running and configured in `truffle.js`.

It can be tested on [Ropsten](https://ropsten.etherscan.io/) with `Meta Mask` chrome extension or `Mist` but I tried it in a local Ethereum node with JSON-RPC with [ethereum-mocked](https://bitbucket.org/locropulen/ethereum-mocked) listening at port `8545` or read about [how to deploy a truffle contract to ropsten](https://medium.com/@guccimanepunk/how-to-deploy-a-truffle-contract-to-ropsten-e2fb817870c1)

* Install ganache-cli

```bash
npm install -g ganache-cli

# Using ganache-cli
ganache-cli
```

For more information about it see [ganache-cli](https://github.com/trufflesuite/ganache-cli)

## Run the web server

* Node 8 LTS
* You can use yarn or npm

```bash
# Install dependencies
yarn

# Build Sol contracts into the Ethereum node
yarn contracts:build

# Build deploy contracts into node
yarn contracts:migrate

# Run the web server
yarn web
```

## Dependencies

* [react](https://reactjs.org/) for building user interface
* [react-native-web](https://github.com/necolas/react-native-web) to handle native like components in the web
* [react-broadcast](https://github.com/ReactTraining/react-broadcast) to handle eficiently web3 in the component tree
* [web3](https://github.com/ethereum/web3.js) as the Etherum Javascript API
* [truffle](https://github.com/trufflesuite/truffle) to build an abstraction of smart contract token
* [react-native-typography](https://github.com/hectahertz/react-native-typography) to define default styles in my components

## Demo

![Transfering tokens](http://g.recordit.co/nxgxSFWB0Q.gif)

## TODO

* Use [token](https://www.ethpm.com/registry/packages/15) from ethpm and make migration from it instead.

## License

MIT