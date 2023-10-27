import { Provider, Account} from "starknet";

async function main() {
   
    const provider = new Provider({ sequencer: { network: constants.NetworkName.SN_GOERLI } });
    
    // Connect to an existing account
    //-----------------------------------------------------------------
    const privateKey = "0x05xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
    const accountAddress = "0x02xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

    const account = new Account(provider, accountAddress, privateKey);
    console.log("account", account);
}

main()
    .then()
    .catch(e => { console.error(e); process.exit(1); });