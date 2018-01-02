/* @flow */

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { material } from 'react-native-typography';
import withWeb3 from '../withWeb3';

class Container extends Component<{
	children: *,
	web3: *,
}> {
	render() {
		const { web3 } = this.props;

		return (
			<View style={styles.Container}>
				<View style={styles.Header}>
					<Text style={material.body1White}>
						Tokens in the ethereum ecosystem can represent any fungible tradable
						good: coins, loyalty points, gold certificates, IOUs, in game items,
						etc...
					</Text>
					<Text style={material.captionWhite}>
						Since all tokens implement some basic features in a standard way,
						this also means that it will be instantly compatible with the
						ethereum wallet and any other client or contract that uses the same
						standards.
					</Text>
				</View>
				<Text style={[styles.title, material.captionWhite]}>
					react-ethereum-metacoin
				</Text>
				{this.props.children}
			</View>
		);
	}
}

export default withWeb3(Container);

const styles = StyleSheet.create({
	Container: {
		flex: 1,
	},
	Header: {
		paddingVertical: 20,
		paddingHorizontal: 12,
		backgroundColor: '#336699',
	},
	title: {
		paddingHorizontal: 12,
		paddingVertical: 9,
		backgroundColor: '#777',
	},
});
