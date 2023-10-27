import { Provider, Account, Contract, constants} from "starknet";

async function main() {
   
    const provider = new Provider({ sequencer: { network: constants.NetworkName.SN_GOERLI } });
    
    // Connect a deployed contract
    //-------------------------------------------------------
    // initialize deployed contract
    const ContractAddress = "0x024a75a1b3d9f8bbe680878f1352c1666e589bc3bd63468c12e9de5392678ec6";

    // read abi of Test contract
    const { abi: testAbi } = await provider.getClassAt(ContractAddress);

    // connect the contract
    const myTestContract = new Contract(testAbi, ContractAddress, provider);
    
    // Read from contract memory, with meta-class
    // --------------------------------------------------------------------
    // Interaction with the contract with call
    const OwnerAddress = await myTestContract.get_owner();
    console.log("Owner address =", "0x" + BigInt(OwnerAddress).toString(16));
    
}

main()
    .then()
    .catch(e => { console.error(e); process.exit(1); });