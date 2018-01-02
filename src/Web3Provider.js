/* @flow */

import React, { PureComponent } from 'react';

import AccountListContainer from './AccountList/AccountListContainer';
import Container from './AccountList/Container';

import { Broadcast } from 'react-broadcast';
import ZettaToken from 'contracts/ZettaToken.sol';

class Web3Provider extends PureComponent<*> {
	componentWillMount() {
		// super important to be here
		ZettaToken.setProvider(this.props.web3.currentProvider);
		// ZettaToken.setNetwork(2); // Enforce morden
	}
	render() {
		return (
			<Broadcast channel="web3" value={this.props.web3}>
				<Container>
					<AccountListContainer />
				</Container>
			</Broadcast>
		);
	}
}

export default Web3Provider;
