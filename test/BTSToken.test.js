const IRISCHAIN = artifacts.require("BTSCHAIN");

contract("BTSCHAIN", (accounts) => {
  it("should put 1,200,000,000 BTSC in the first account", async () => {
    const instance = await IRISCHAIN.deployed();
    const balance = await instance.balanceOf(accounts[0]);
    const expected = web3.utils.toWei("1200000000", "ether");
    assert.equal(balance.toString(), expected, "Initial supply is incorrect");
  });
});