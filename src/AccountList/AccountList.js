/* @flow */

import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { material } from 'react-native-typography';

type Props = {
	accounts: Array<string>,
};
type ItemProps = {
	account: string,
	balance: {
		account: string,
	},
};
const Item = ({ account, balance }: ItemProps) => {
	return (
		<View key={account} style={styles.row}>
			<Text style={material.caption}>{account}</Text>
			<Text style={material.caption}>{balance.account}</Text>
		</View>
	);
};
export default class AccountList extends PureComponent<Props> {
	render() {
		return (
			<View>
				<View style={styles.header}>
					<Text style={material.title}>Account</Text>
					<Text style={material.title}>Tokens</Text>
				</View>
				{this.props.accounts.map(Item)}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	header: {
		padding: 5,
		marginHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	row: {
		padding: 5,
		borderTopWidth: 1,
		borderTopColor: '#CCC',
		marginHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
