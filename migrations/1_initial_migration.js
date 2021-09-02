const Migrations = artifacts.require("Migrations");
const SwapRouter = artifacts.require("SwapRouter");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(SwapRouter, "factoryAddress", "WETH9");
};
