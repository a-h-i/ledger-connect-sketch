import TransportWebUSB from "@ledgerhq/hw-transport-webusb";





export async function getCurrentlyRunningModule() {
    const transport = await TransportWebUSB.create();
    const response = await transport.send(0xb0, 0x01, 0x00, 0x00);
    console.log(response.length);
    console.log('0x' + response.toString('hex'))
}

