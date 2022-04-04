// https://eth-ropsten.alchemyapi.io/v2/_5X5RY7krsPOmcZpfyCR1c1c7b0r-4wB

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/_5X5RY7krsPOmcZpfyCR1c1c7b0r-4wB",
      accounts: [
        "7eb63e526fe8c11c51f78acaa3f665f5ab9644eef2e0cb7f18d9d666e5e20bea",
      ],
    },
  },
};
