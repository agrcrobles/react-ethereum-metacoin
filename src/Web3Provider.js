/* @flow */

import React, { PureComponent } from 'react';

import AccountListContainer from './AccountList/AccountListContainer';
import Container from './AccountList/Container';

import { Broadcast } from 'react-broadcast';

class Web3Provider extends PureComponent<*> {
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
