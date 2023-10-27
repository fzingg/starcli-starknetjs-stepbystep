import { Provider, Account, Contract, constants} from "starknet";

async function main() {
   
    const provider = new Provider({ sequencer: { network: constants.NetworkName.SN_GOERLI } });
    
    // Connect a deployed contract
    //-------------------------------------------------------
    // initialize deployed contract
    const testAddress = "0x024a75a1b3d9f8bbe680878f1352c1666e589bc3bd63468c12e9de5392678ec6";

    // read abi of Test contract
    const { abi: testAbi } = await provider.getClassAt(testAddress);

    // connect the contract
    const myTestContract = new Contract(testAbi, testAddress, provider);
    console.log("myTestContract", myTestContract);
    
}

main()
    .then()
    .catch(e => { console.error(e); process.exit(1); });