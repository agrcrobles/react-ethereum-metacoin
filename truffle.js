module.exports = {
	networks: {
		development: {
			host: 'localhost',
			port: 8545,
			network_id: '*',
		},
		ropsten: {
			host: '158.253.8.12',
			port: 8545,
			network_id: 3,
		},
	},
	migrations_directory: './migrations',
};
