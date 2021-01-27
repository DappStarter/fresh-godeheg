require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space stool response muscle public grace define army gate'; 
let testAccounts = [
"0x66d9a906f121634fd2773b984fd58019b0e78164fda298f855cc14e16edf8aff",
"0x317773942b8d2f8f869e59a38d83047b327049eac274d9703a4c5fb16a2c7e68",
"0xd13641f8498e360069666a25f310e393f730b621dbd9c7294f10445f6c71b924",
"0x4b9e91c3f4a5381a8a98fefb074e02ad733928de54c57d6ee726e8dabf7a8183",
"0x221b5726e0af63f9c96f5d0144ff602922b950bb32502818937876d89bf2e47e",
"0x7e202b621c37cce640a5f9abc0b69db58117396c0f27d01d8a7eb017183d8aac",
"0xe43eb7e36dee1307b784b9e246b1582ad0ee80ba6095475d8063dec479a52990",
"0x9b604fab09c344b20dc737c5c4d99677aae194e04643913283254019cb9752e2",
"0xdbdc258b42953732a8a16bac80716547d910cf3d406535b67ee6fbb7c2054bf3",
"0xbbe1c62c23b73678a7dfe30f749334da2c60dc8f5f61ce6652726b8833f09184"
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
