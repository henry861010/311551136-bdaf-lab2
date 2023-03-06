const readline = require("readline");
var bip39 = require('bip39')
var { hdkey } = require('ethereumjs-wallet')

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



// question user to enter name
rl.question("What is your prefix: ", function (string) {
  var prefix = string;
  var address1
  var mnemonic
  var seed
  var hdWallet
  var keyPair1
  var wallet1
  
  do{
    mnemonic = bip39.generateMnemonic()
    seed = bip39.mnemonicToSeedSync(mnemonic)
    hdWallet = hdkey.fromMasterSeed(seed)
    keyPair1 = hdWallet.derivePath("m/44'/60'/0'/0/0")
    wallet1 = keyPair1.getWallet()
    address1 = wallet1.getAddressString()
  }while(prefix != address1.substr(2,prefix.length))

  console.log("address: "+address1);
  console.log("mnemonic: "+mnemonic);
  rl.close();
});
