/* @flow */

import React, { Component } from 'react';

import ZettaToken from 'contracts/ZettaToken.sol';
import withWeb3 from '../withWeb3';

import {
	View,
	Text,
	TextInput,
	Switch,
	Button,
	StyleSheet,
} from 'react-native';

import { material } from 'react-native-typography';

type Props = *;
type State = {
	amount: number,
	address: string,
	from: string,
	useCoinbase: boolean,
};
class Transfer extends Component<Props, State> {
	state = {
		amount: 0,
		address: '',
		from: '',
		useCoinbase: true,
	};
	handleSend = e => {
		e.preventDefault();
		var zetta = ZettaToken.deployed();

		console.log(`Recipient Address: ${this.state.address}`);

		let promise;
		if (this.state.useCoinbase) {
			promise = zetta.transfer(this.state.address, this.state.amount, {
				from: this.props.sender,
			});
		} else {
			promise = zetta.transfer(this.state.address, this.state.amount, {
				from: this.state.from,
			});
		}

		promise
			.then(function() {
				console.log('SENT');
			})
			.catch(function(e) {
				console.log(e);
			});
	};
	render() {
		return (
			<View>
				<Text style={[styles.title, material.captionWhite]}>
					transfer-wisely
				</Text>
				<Text style={[styles.description, material.captionWhite]}>
					Use Coinbase
				</Text>
				<Switch
					onValueChange={useCoinbase => this.setState({ useCoinbase })}
					style={styles.switch}
					value={!!this.state.useCoinbase}
				/>
				{!this.state.useCoinbase && (
					<React.Fragment>
						<Text style={[styles.description, material.captionWhite]}>
							From
						</Text>
						<TextInput
							placeholder="From account hash"
							style={styles.input}
							onChangeText={from => this.setState({ from })}
						/>
					</React.Fragment>
				)}
				<Text style={[styles.description, material.captionWhite]}>
					Recipient Address
				</Text>
				<TextInput
					style={styles.input}
					placeholder="To Account hash"
					onChangeText={address => this.setState({ address })}
				/>
				<Text style={[styles.description, material.captionWhite]}>Amount</Text>
				<TextInput
					style={styles.input}
					placeholder="Amount of token to transfer"
					onChangeText={amount => this.setState({ amount })}
				/>
				<Button title="Send" style={styles.button} onPress={this.handleSend} />
			</View>
		);
	}
}
const styles = StyleSheet.create({
	button: { padding: 9 },
	input: { padding: 9, fontSize: 10 },
	switch: { marginVertical: 9, marginHorizontal: 12 },
	title: {
		paddingHorizontal: 12,
		paddingVertical: 9,
		backgroundColor: '#777',
	},
	description: {
		paddingHorizontal: 12,
		paddingVertical: 9,
		backgroundColor: '#444',
	},
});

export default withWeb3(Transfer);
