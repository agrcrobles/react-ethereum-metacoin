/* @flow */

import React, { Component } from 'react';
import AccountList from '../AccountList/AccountList';
import Transfer from '../Transfer';

import ZettaToken from 'contracts/ZettaToken.sol';

import { View, Text, StyleSheet } from 'react-native';

import withWeb3 from '../withWeb3';

const styles = StyleSheet.create({
	box: { paddingVertical: 10 },
});

type Props = *;
type State = {
	accounts: Array<*>,
	coinbase: *,
};
class AccountListContainer extends Component<Props, State> {
	state = {
		accounts: [],
		coinbase: '',
	};
	componentWillMount() {
		this.setState({ coinbase: this.props.web3.eth.coinbase });
	}
	componentDidMount() {
		const refreshBalances = () => {
			this.getAccountBalances();
		};

		refreshBalances();

		setInterval(() => {
			refreshBalances();
			return refreshBalances;
		}, 5000);
	}

	getAccountBalance: Function;
	getAccountBalance = (account: *) => {
		var zetta = ZettaToken.deployed();
		return new Promise((resolve: Function, reject: Function) => {
			zetta.balanceOf
				.call(account, { from: account })
				.then(function(value) {
					resolve({ account: value.valueOf() });
				})
				.catch(function(e) {
					console.error(e);
					reject();
				});
		});
	};

	getAccountBalances: Function;
	getAccountBalances = () => {
		this.props.web3.eth.getAccounts((err, accs: Array<string>) => {
			if (err != null) {
				console.error(err);
				return;
			}

			if (accs.length === 0) {
				console.error(
					"Couldn't get any accounts! Make sure your Ethereum client is configured correctly."
				);
				return;
			}
			var accountsAndBalances = accs.map(account => {
				return this.getAccountBalance(account).then(balance => {
					return { account, balance };
				});
			});

			Promise.all(accountsAndBalances).then(accountsAndBalances => {
				this.setState({
					accounts: accountsAndBalances,
				});
			});
		});
	};

	render() {
		return (
			<View style={styles.box}>
				<AccountList accounts={this.state.accounts} />
				<Transfer sender={this.state.coinbase} />
			</View>
		);
	}
}

export default withWeb3(AccountListContainer);
