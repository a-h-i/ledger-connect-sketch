import { listen } from "@ledgerhq/logs";
import AppEth from "@ledgerhq/hw-app-eth";
import AppBtc from "@ledgerhq/hw-app-btc";
import TransportWebHID from "@ledgerhq/hw-transport-webhid";




export async function displayEthereumAddress() {
    const transport = await TransportWebHID.create();
    const eth = new AppEth(transport);
    const { address } = await eth.getAddress("44'/60'/0'/0/0");
    document.getElementById('address').innerHTML = address;
}


export async function displayBtcAddress() {
    const transport = TransportWebHID.create();
    listen(log => console.log(log))

    const appBtc = new AppBtc({ transport, currency: "bitcoin" });
    const { bitcoinAddress: address } = await appBtc.getWalletPublicKey(
      "44'/0'/0'/0/0",
      { verify: false, format: "legacy"}
    );
    document.getElementById('address').innerHTML = address;
}