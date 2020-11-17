module.exports = {
    networks: {
        development: {
             host: "127.0.0.1",
             port: 8545,
             network_id: "*",
             gas: 6721975,
        },   
    }, 
    compilers: {
        solc: {
            version: '0.6.12',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 1000000,
                }
            }
        },
    },
    plugins: ["solidity-coverage"],
    mocha: { // https://github.com/cgewecke/eth-gas-reporter
        reporter: 'eth-gas-reporter',
        reporterOptions : {
            currency: 'USD',
            gasPrice: 10,
            onlyCalledMethods: true,
            showTimeSpent: true,
            excludeContracts: ['Migrations', 'mocks']
        }
    }
};
