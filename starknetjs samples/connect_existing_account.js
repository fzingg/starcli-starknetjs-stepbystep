import { Provider, Account} from "starknet";

async function main() {
   
    const provider = new Provider({ sequencer: { network: constants.NetworkName.SN_GOERLI } });
    
    // Connect to an existing account
    //-----------------------------------------------------------------
    const privateKey = "0x05446af914872f8feefe0188e487dd43224b2ce7c940167e5488d89fd9cda41d";
    const accountAddress = "0x02968679311aF0D65AD81f2C17a6430d678f2A1B576533E40e0E0D8F9fD2A4A2";

    const account = new Account(provider, accountAddress, privateKey);
    console.log("account", account);
}

main()
    .then()
    .catch(e => { console.error(e); process.exit(1); });