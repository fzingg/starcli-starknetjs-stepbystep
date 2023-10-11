# starkli-starknetjs-stepbystep
A step by step guide on how to deploy and interact with Starknet smart contracts, using both the Starcli tool and Starknetjs sdk.

It can be useful for achieving few quests of the amazing [node guardians](https://nodeguardians.io/) platform where you can learn Cairo and Starknet, amongs many others skills.

## Useful resources and tools

- [Create an ArgentX wallet](https://www.argent.xyz/learn/how-to-create-an-argent-x-wallet/)
- [The starknet book](https://book.starknet.io/chapter_1/environment_setup.html)
- [Starknet.js guide](https://www.starknetjs.com/docs/guides/intro)
- [The Cairo programming language](https://book.cairo-lang.org/title-page.html)
- [Starknet by examples](https://starknet-by-example.voyager.online/starknet-by-example.html)
- [Various type convertor (Felt, Hex, String, ...)](https://www.stark-utils.xyz/converter)
-  [StarkNet’s Cairo Language: the Felt Integer Type Explained](https://www.youtube.com/watch?v=jcrAq71WwSM)

## Argent X smart wallet account
We will need to create an argentX smart wallet and an account, which will be used when interacting with Starknet smart contracts.

- Follow the guide: [Create an ArgentX wallet](https://www.argent.xyz/learn/how-to-create-an-argent-x-wallet/)
- Fund your wallet with ETH. Use [Starknet Goerli Faucet](https://faucet.goerli.starknet.io/) as needed.

## Starkli

We will setup starkli then compile, deploy and interact with a starknet smart contract written in Cairo.

### Setting up environment

1. Install `starkliup`
```
curl https://get.starkli.sh | sh
```
2. Restart the terminal
3. Install starkli
```
starkliup
```
4. Restart the terminal and run
```
starkli --version
```

### Creating a signer

The Signer is an essential smart contract capable of signing transactions in Starknet. You’ll need the private key from your smart wallet to create one, from which the public key can be derived.

Starkli enables secure storage of your private key through a keystore file. This encrypted file can be accessed using a password and is generally stored in the default Starkli directory.

1. Create the default directory:
```
mkdir ~/.starkli-wallets/deployer -p
```
2. Export your private key from your Argent X wallet account and saved it.
```
Export the private key from your Braavos or Argent wallet. For Argent X, you can find it in the "Settings" section → Select your Account → "Export Private Key". For Braavos, you can find it in the "Settings" section → "Privacy and Security" → "Export Private Key".
```

3. Generate the keystore file:
```
starkli signer keystore from-key ~/.starkli-wallets/deployer/my_keystore_1.json
Enter private key:
Enter password:
```
In the private key prompt, paste the private key of your smart wallet. In the password prompt, enter a password of your choice. You will need this password to sign transactions using Starkli.

### Creating an account descriptor

1. Get your Argent X account address
2. Create the account descriptor:
```
starkli account fetch <SMART_WALLET_ADDRESS> --output ~/.starkli-wallets/deployer/my_account_1.json
```
Paste your account address in place of <SMART_WALLET_ADDRESS>

### Setting up Environment Variables

```
export STARKNET_ACCOUNT=~/.starkli-wallets/deployer/my_account_1.json
export STARKNET_KEYSTORE=~/.starkli-wallets/deployer/my_keystore_1.json
```

### Build a cairo smart-contract
1. Create a scarb package:
```
scarb new first_contract
```
2. Create a first_contract.cairo file
Copy this repo sample `cairo contract/first_contract.cairo` to your project src directory `first_contract/src`