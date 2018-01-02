/* @flow */

import React from 'react';

import Web3Provider from './Web3Provider';
import Web3 from 'web3';

import { render } from 'react-native';

import truffleConfig from '../truffle';

const web3Location = `http://${truffleConfig.networks.development.host}:${
	truffleConfig.networks.development.port
}`;

type Props = *;
class Root extends React.PureComponent<Props> {
	render() {
		return this.props.render(this.props.web3);
	}
}

window.addEventListener('load', function() {
	var web3Provided;
	// Supports Metamask and Mist, and other wallets that provide 'web3'.
	// eslint-disable-next-line
	if (typeof web3 !== 'undefined') {
		console.log('Injected web3 detected.');
		// Use the Mist/wallet provider.
		// eslint-disable-next-line
		web3Provided = new Web3(web3.currentProvider);
	} else {
		console.log('No web3 instance injected, using Local web3.');

		web3Provided = new Web3(new Web3.providers.HttpProvider(web3Location));
	}

	render(
		<Root render={() => <Web3Provider web3={web3Provided} />} />,
		document.getElementById('root')
	);
});
