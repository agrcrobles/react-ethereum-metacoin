var ConvertLib = artifacts.require('./ConvertLib.sol');
var ZettaToken = artifacts.require('./ZettaToken.sol');

module.exports = function(deployer) {
	deployer.deploy(ConvertLib);
	deployer.link(ConvertLib, ZettaToken);
	deployer.deploy(ZettaToken);
};
