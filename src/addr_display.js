import { listen } from "@ledgerhq/logs";
import AppEth from "@ledgerhq/hw-app-eth";
import AppBtc from "@ledgerhq/hw-app-btc";
import TransportWebHID from "@ledgerhq/hw-transport-webhid";


function splitPath(path) {
  const paths = [];
  for (const element in path.split('/')) {
    let number = parseInt(element, 10);
    if (element.length > 1 && element[element.length - 1] === "'") {
      number += 0x80000000;
    }
    paths.push(number);
  }
  return paths;
}

export async function getTariAddress() {
  const transport = await TransportWebHID.create();
  const paths = splitPath("44'/60'/0'/0/0");
  const buffer = Buffer.alloc(1 + paths.length * 4);
  buffer[0] = paths.length;
  paths.forEach((path, index) => buffer.writeUInt32BE(path,1 + index * 4))
  const response = await transport.send(0x80, 0x03, 0, 0, buffer);
  console.log(response.length);
  console.log(response.toString('hex'));
  const length = response[0];
  const key = response.slice(1, -2)
  console.log(key.toString('hex'));
  document.getElementById('address').innerHTML = '0x' + key.toString('hex');
  await transport.close();
}



export async function displayEthereumAddress() {
    const transport = await TransportWebHID.create();
    const eth = new AppEth(transport);
    const { address } = await eth.getAddress("44'/60'/0'/0/0");
    document.getElementById('address').innerHTML = address;
    await transport.close();
}


export async function displayBtcAddress() {
    const transport = await TransportWebHID.create();
    listen(log => console.log(log))

    const appBtc = new AppBtc({ transport });
    const { bitcoinAddress: address } = await appBtc.getWalletPublicKey(
      "44'/0'/0'/0/0",
      { verify: false, format: "legacy"}
    );
    document.getElementById('address').innerHTML = address;
    await transport.close();
}


export async function tariPubAlpha() {
  const transport = await TransportWebHID.create()
  const buffer = Buffer.alloc(9);
  buffer[0] = 4;
  buffer.writeUInt32LE(60, 1);
  buffer.writeUInt32LE(0, 5);
  const response = await transport.send(0x80, 0x03, 0, 0, buffer);
  console.log(response.length);
  console.log(response.toString('hex'));

  await transport.close();
}