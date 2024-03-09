import { generateAddress6868 } from "generate-eth-address-end-6868";
import { ethers } from "ethers";

function generate() {
    let addr = "";
    do {
        let seed = generateAddress6868();
        let wallet = ethers.Wallet.fromPhrase(seed);
        addr = wallet.address;
    } while (!addr.startsWith("0x66"));
    return seed;
}

export { generate };
