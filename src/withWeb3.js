
import * as React from 'react';
import { Subscriber } from 'react-broadcast';

function withWeb3(Component) {
	return function WrapperComponent(props: Props) {
		return (
			<Subscriber channel={'web3'}>
				{(data) => <Component {...props} web3={data} />}
			</Subscriber>
		);
	};
}
export default withWeb3;
