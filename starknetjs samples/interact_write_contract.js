import { Provider, Contract, Account, constants, ec, json  } from "starknet";


async function main() {
   
    const provider = new Provider({ sequencer: { network: constants.NetworkName.SN_GOERLI } });
    
    
    // Connect to an existing account
    //-----------------------------------------------------------------
    const privateKey = "0x05...........";
    const accountAddress = "0x029...............";


    const account = new Account(provider, accountAddress, privateKey);
    
    const ContractAddress = "0x03507..................";

    const { abi: testAbi } = await provider.getClassAt(ContractAddress);

    const myTestContract = new Contract(testAbi, ContractAddress, provider);

    // // Write to contract memory
    // // Connect the deployed Test contract in Tesnet
    const NewOwnerAddress = "0x07FdeE..................";
    
    myTestContract.connect(account);

    const myCall = myTestContract.populate("transfer_ownership", { new_owner: NewOwnerAddress });
    const res = await myTestContract.transfer_ownership(myCall.calldata);
    console.log("res =", res);

}

main()
    .then()
    .catch(e => { console.error(e); process.exit(1); });