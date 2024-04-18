import 'core-js/actual';
import { listen } from "@ledgerhq/logs";

import AppEth from "@ledgerhq/hw-app-eth";
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import TransportWebHID from "@ledgerhq/hw-transport-webhid";
import AppBtc from "@ledgerhq/hw-app-btc";



document.getElementById('getAddress').addEventListener('click', async () => {
    const transport = await TransportWebHID.create(); // rejects if can't connect or canceled
    listen(log => console.log(log));
    // const eth = new AppEth({ transport });
    // const { address } = await eth.getAddress("44'/60'/0'/0/0");
    const appBtc = new AppBtc({ transport, currency: "bitcoin" });
    const { address } = await appBtc.getWalletPublicKey(
      "44'/0'/0'/0/0",
      { verify: false, format: "legacy"}
    );
    document.getElementById('address').innerHTML = address;
});