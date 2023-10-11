# starkli-starknetjs-stepbystep
A step by step guide on how to deploy and interact with Starknet smart contracts, using both the Starcli tool and Starknetjs sdk.

It can be useful for achieving few quests of the amazing [node guardians](https://nodeguardians.io/) platform where you can learn Cairo and Starknet, amongs many others skills.

## Useful documentation and tools

- [Create an ArgentX wallet](https://www.argent.xyz/learn/how-to-create-an-argent-x-wallet/)
- [The starknet book](https://book.starknet.io/chapter_1/environment_setup.html)
- [Starknet.js guide](https://www.starknetjs.com/docs/guides/intro)
- [The Cairo programming language](https://book.cairo-lang.org/title-page.html)
- [Starknet by examples](https://starknet-by-example.voyager.online/starknet-by-example.html)
- [Various type convertor (Felt, Hex, String, ...)](https://www.stark-utils.xyz/converter)

## Argent X wallet account
We will need to create an argentX wallet and an account, which will be used when interacting with Starknet smart contracts.

- Follow the guide: [Create an ArgentX wallet](https://www.argent.xyz/learn/how-to-create-an-argent-x-wallet/)

## Starcli

### Setting up envirronment

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