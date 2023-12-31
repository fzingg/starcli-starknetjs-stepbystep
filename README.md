# starkli-starknetjs-stepbystep
A step by step guide on how to deploy and interact with Starknet smart contracts, using both the Starcli tool and Starknetjs sdk.

It can be useful for achieving few quests of the amazing [node guardians](https://nodeguardians.io/) platform where you can learn Cairo and Starknet, amongs many others skills.

## Table of contents

- [Useful resources and tools](https://github.com/fzingg/starcli-starknetjs-stepbystep#useful-resources-and-tools)
- [Argent X smart wallet account](https://github.com/fzingg/starcli-starknetjs-stepbystep#argent-x-smart-wallet-account)
- [Starkli](https://github.com/fzingg/starcli-starknetjs-stepbystep#starkli)
- [Starkli - Setting up environment](https://github.com/fzingg/starcli-starknetjs-stepbystep#setting-up-environment)
- [Starkli - Creating a signer](https://github.com/fzingg/starcli-starknetjs-stepbystep#creating-a-signer)
- [Starkli - Creating an account descriptor](https://github.com/fzingg/starcli-starknetjs-stepbystep#creating-an-account-descriptor)
- [Starkli - Setting up Environment Variables](https://github.com/fzingg/starcli-starknetjs-stepbystep#setting-up-environment-variables)
- [Starkli - Build a cairo smart-contract](https://github.com/fzingg/starcli-starknetjs-stepbystep#build-a-cairo-smart-contract)
- [Starkli - Declaring your contract](https://github.com/fzingg/starcli-starknetjs-stepbystep#declaring-your-contract)
- [Starkli - Deploying Smart Contracts on Starknet](https://github.com/fzingg/starcli-starknetjs-stepbystep#deploying-smart-contracts-on-starknet)
- [Starkli - Interacting with the Starknet contract](https://github.com/fzingg/starcli-starknetjs-stepbystep#interacting-with-the-starknet-contract)
- [Starknet.js](https://github.com/fzingg/starcli-starknetjs-stepbystep#starknetjs)
- [Starknet.js - What is Starknet.js ?](https://github.com/fzingg/starcli-starknetjs-stepbystep#what-is-starknetjs-)
- [Starknet.js - Installation](https://github.com/fzingg/starcli-starknetjs-stepbystep#installation)
- [Starknet.js - Create a project for running samples files](https://github.com/fzingg/starcli-starknetjs-stepbystep#create-a-project-for-running-samples-files)
- [Starknet.js - Connect to an existing account](https://github.com/fzingg/starcli-starknetjs-stepbystep#connect-to-an-existing-account)
- [Starknet.js - Connect to a deployed contract](https://github.com/fzingg/starcli-starknetjs-stepbystep#connect-to-a-deployed-contract)
- [Starknet.js - Interact with your contract
](https://github.com/fzingg/starcli-starknetjs-stepbystep#interact-with-your-contract)
- [Starknet.js -]()
- [Starknet.js -]()
- [Starknet.js -]()

## Useful resources and tools

- [Create an ArgentX wallet](https://www.argent.xyz/learn/how-to-create-an-argent-x-wallet/)
- [The starknet book](https://book.starknet.io/chapter_1/environment_setup.html)
- [Starknet.js guide](https://www.starknetjs.com/docs/guides/intro)
- [The Cairo programming language](https://book.cairo-lang.org/title-page.html)
- [Starknet by examples](https://starknet-by-example.voyager.online/starknet-by-example.html)
- [Various type convertor (Felt, Hex, String, ...)](https://www.stark-utils.xyz/converter)
-  [StarkNet’s Cairo Language: the Felt Integer Type Explained](https://www.youtube.com/watch?v=jcrAq71WwSM)
- [Smart Contract Development With Starknet & Cairo Language with Katana Local Node](https://livesoftwaredeveloper.com/articles/8/smart-contract-development-with-starknet-cairo-language-with-katana-local-node)
- [Cairo and javascript data transformation](https://www.starknetjs.com/docs/guides/define_call_message/)

## Argent X smart wallet account
We will need to create an argentX smart wallet and an account, which will be used when interacting with Starknet smart contracts.

- Follow the guide: [Create an ArgentX wallet](https://www.argent.xyz/learn/how-to-create-an-argent-x-wallet/)
- Fund your wallet with ETH. Use [Starknet Goerli Faucet](https://faucet.goerli.starknet.io/) as needed.

Note: Instead of set up a walllet and funding it, you canuse Katana as a local node.

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
1. Create a scarb project:
```
scarb new smartcontract
```
2. Create a first_contract.cairo file
Copy this repo sample `cairo contract/first_contract.cairo` to your project src directory `smart_contract/src`

3. Compile the contract:

```
scarb build
```
This creates a compiled contract in target/dev/ as `smartcontract_Ownable.sierra.json`

### Declaring your contract

1. Run this command to declare your contract using the default Starknet Sequencer’s Gateway:

```
starkli declare target/dev/smartcontract_Ownable.sierra.json
```
2. At the `Enter keystore password` use the Argent X account password you set up.

3. After running the command, you’ll receive a contract class hash. This unique hash serves as the identifier for your contract class within Starknet. For example:

```
Class hash declared: 0x04c70a75f0246e572aa2e1e1ec4fffbe95fa196c60db8d5677a5c3a3b5b6a1a8
```

You can think of this hash as the contract class’s 'address.' Use a block explorer like [StarkScan](https://testnet.starkscan.co/class/0x04c70a75f0246e572aa2e1e1ec4fffbe95fa196c60db8d5677a5c3a3b5b6a1a8) to verify this hash on the blockchain.

### Deploying Smart Contracts on Starknet

To deploy a smart contract, you’ll need to instantiate it on Starknet’s testnet. This process involves executing a command that requires two main components:

1. The class hash of your smart contract.
2. Any constructor arguments that the contract expects. (In our example, the constructor expects an 'owner' address.)

The command would look like this:
```
starkli deploy \
    <CLASS_HASH> \
    <CONSTRUCTOR_INPUTS>
```

Here’s a specific example with an actual class hash and constructor inputs (as the owner address use the address of your smart wallet so you can invoke the transfer_ownership function later):
```
starkli deploy \
    0x04c70a75f0246e572aa2e1e1ec4fffbe95fa196c60db8d5677a5c3a3b5b6a1a8 \
    0x02cdAb749380950e7a7c0deFf5ea8eDD716fEb3a2952aDd4E5659655077B8510
```

After executing the command and entering your password, you should see output like the following:

```
Deploying class 0x04c70a75f0246e572aa2e1e1ec4fffbe95fa196c60db8d5677a5c3a3b5b6a1a8 with salt 0x065034b27a199cbb2a5b97b78a8a6a6c6edd027c7e398b18e5c0e5c0c65246b7...
The contract will be deployed at address 0x02a83c32d4b417d3c22f665acbc10e9a1062033b9ab5b2c3358952541bc6c012
Contract deployment transaction: 0x0743de1e233d38c4f3e9fb13f1794276f7d4bf44af9eac66e22944ad1fa85f14
Contract deployed:
0x02a83c32d4b417d3c22f665acbc10e9a1062033b9ab5b2c3358952541bc6c012
```

The contract is now live on the Starknet testnet. You can verify its status using a block explorer like StarkScan. On the "Read/Write Contract" tab, you’ll see the contract’s external functions.

### Interacting with the Starknet contract

#### Calling a read Function

The call command enables you to query a smart contract function without sending a transaction. For instance, to find out who the current owner of the contract is, you can use the `get_owner` function, which requires no arguments.

```
starkli call \
    <CONTRACT_ADDRESS> \
    get_owner
```

Replace <CONTRACT_ADDRESS> with the address of your contract. The command will return the owner’s address, which was initially set during the contract’s deployment:

```
[
    "0x02cdab749380950e7a7c0deff5ea8edd716feb3a2952add4e5659655077b8510"
]
```

#### Invoking a Write Function

You can modify the contract’s state using the invoke command. For example, let’s transfer the contract’s ownership with the transfer_ownership function.

```
starkli invoke \
    <CONTRACT_ADDRESS> \
    transfer_ownership \
    <NEW_OWNER_ADDRESS>
```

Replace <CONTRACT_ADDRESS> with the address of the contract and <NEW_OWNER_ADDRESS> with the address you want to transfer ownership to.

## Starknet.js

### What is Starknet.js ?

Starknet.js is a library that helps to connect your website or your Decentralized Application (DAPP) to the blockchain-based Starknet network, using Javascript / Typescript language.

Full documentation: [Starknet.js](https://www.starknetjs.com/docs/guides/what_s_starknet.js)

Great tutorials implemating React full project: [Starknet.js examples](https://book.starknet.io/ch02-07-01-examples.html)

### Installation

- use the main branch

```
npm install starknet
```

- to use latest features (merges in develop branch)
```
npm install starknet@next
```

### Create a project for running samples files

Just run the command:
```
npm init
```
Then you can copy all samples files from `starknetjs samples` directory of this repo to your local project.

### Connect to an existing account

We are going to use our [Argent X smart wallet account](https://github.com/fzingg/starcli-starknetjs-stepbystep#argent-x-smart-wallet-account) we created previously.

We will need :
- The address of the account (public data)
- The private key of the account (very sensistive data)

We will use the `Account(provider, accountAddress, privateKey)` method.

In the sample javascript file of this repo `starknetjs samples/connect_existing_account.js` replace the `privateKey` and `accountAddress` with your argentX account values.

Run the script: 
```
node connect_existing_account.js
```

you should see the account information in the console:
```
account Account {
  provider: SequencerProvider {
    responseParser: SequencerAPIResponseParser {},
    baseUrl: 'https://alpha4.starknet.io',
    feederGatewayUrl: 'https://alpha4.starknet.io/feeder_gateway',
    gatewayUrl: 'https://alpha4.starknet.io/gateway',
    chainId: '0x534e5f474f45524c49',
    headers: undefined,
    blockIdentifier: 'pending'
  },
  deploySelf: [AsyncFunction: deployAccount],
  address: '0x0296xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  signer: Signer {
    pk: '0x54xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  },
  cairoVersion: '0'
}
```

### Connect to a deployed contract

Previously we deployed a contract.
We will now connect to it by using the `new Contract(testAbi, testAddress, provider)` method.

In the sample javascript file of this repo `starknetjs samples/connect_deployed_contract.js` replace the `ContractAddress` with your deployed contract address.

Run the script: 
```
node connect_deployed_contract.js
```

You should see all information about your contract in the console.

### Interact with your contract

#### Calling a read function

Our previsously deployed contract has a `get_owner` function which returns the address of the deployer account.

We will call that method directly on the contract instance we connected to previously: 
```
myTestContract.get_owner();
```

In the sample javascript file of this repo `starknetjs samples/interact_read_contract.js` replace the `ContractAddress` with your deployed contract address.

Run the script: 
```
node interact_read_contract.js
```

You should see your account address which is the owner of your contract.

note: We use `"0x" + BigInt(OwnerAddress).toString(16)` to convert the number returned by starknet to a HEX address.

#### Write to contract memory, with meta-class

Our previsously deployed contract has a `transfer_ownership` function which transfers the account ownership of the contract.

The method definition is: 

```
fn transfer_ownership(ref self: ContractState, new_owner: ContractAddress)
```

So from our starknet script we will have to pass the `new_owner` account address.

We will use that way in the script:

```
const myCall = myTestContract.populate("transfer_ownership", { new_owner: NewOwnerAddress });
    const res = await myTestContract.transfer_ownership(myCall.calldata);
```

In the sample javascript file of this repo `starknetjs samples/interact_write_contract.js` replace :
- the `ContractAddress` with your deployed contract address.
- the `privateKey` with your own account private key.
- the `accountAddress` corrsponding (the own you used previously to deploy the contract).
- the `NewOwnerAddress` with an a new account address (you can create another account on your ArgentX wallet for example).

Run the script: 
```
node interact_write_contract.js
```

Then you can verify the ownership has been correctly transfered by checking on the [testnet starknet explorer](https://testnet.starkscan.co/). (go to Read/write Contract tab, click Read button, then the `get_owner` method).