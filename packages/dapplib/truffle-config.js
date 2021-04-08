require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture street rice pizza hole junior light army genius'; 
let testAccounts = [
"0xaaf311be1908de2454fc5a64b06475f7e7639aa42c8f42a6be8c2a195cd7948e",
"0x63b29960a6820da7fb4da83baf0297ff97ffba57c45c6fcfb4667ce0c99a17f6",
"0x540140704ebd343b16b8773b287610cdc25184127e70be7203ea9ad76ecd6f4e",
"0x6d0318a9b86650ad05a192d3b90fc3583d28dd906daaf27237a78078999374c5",
"0xae741fa3edd7bf0b3967835ea37f3af38d5e3dcfba3690f434a27be30998133e",
"0x8c600ac3e83ca81220f5e42d8b94071eed83347e61254f0291f66a01ae6a6f57",
"0x5f55be3fbb367299846917fc76fc9cf06654126912147a547571fb9afdb6f9b9",
"0x51d35641bd43e5770fbb03b8b713f9b5fbc0fe54718fd3db980906df1bf25f2b",
"0x80d6afe2b6625475eb8ae39a7bfa547169b553d73065648240cebbc991592589",
"0x4021bc99eb81f72ac8976bcec738348cdf220283efc936961598a74444d4c4ca"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
