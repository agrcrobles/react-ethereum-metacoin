pragma solidity ^0.4.0;
import "./ConvertLib.sol";
import "./EIP20Interface.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract ZettaToken is EIP20Interface {
	mapping (address => uint) balances;
	mapping (address => mapping (address => uint256)) allowed;
	
	// uint initialSupply
	function ZettaToken() {
		balances[tx.origin] = 10000;
	}

	function transfer(address receiver, uint amount) returns(bool sufficient) {
		if (balances[msg.sender] < amount) return false;
		balances[msg.sender] -= amount;
		balances[receiver] += amount;
		Transfer(msg.sender, receiver, amount);
		return true;
	}

	function getBalanceInEth(address addr) returns(uint){
		return ConvertLib.convert(balanceOf(addr),2);
	}

	function balanceOf(address addr) returns(uint) {
  		return balances[addr];
	}

	// uint256 public totalSupply;

    function transferFrom(address from, address receiver, uint amount) returns (bool) {
		if (balances[from] < amount) return false;
		balances[from] -= amount;
		balances[receiver] += amount;
		Transfer(from, receiver, amount);
		return true;
	}
    function approve(address _spender, uint256 amount) public returns (bool success) {
        allowed[msg.sender][_spender] = amount;
        Approval(msg.sender, _spender, amount);
        return true;
    }

    function allowance(address _owner, address _spender) returns (uint) {
		return allowed[_owner][_spender];
	}
}
