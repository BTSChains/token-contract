const IRISCHAIN = artifacts.require("BTSCHAIN");

module.exports = function (deployer) {
  const initialSupply = web3.utils.toWei("1200000000", "ether");
  deployer.deploy(IRISCHAIN, initialSupply);
};