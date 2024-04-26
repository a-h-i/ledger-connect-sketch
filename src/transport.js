import TransportWebUSB from "@ledgerhq/hw-transport-webusb";





export async function getCurrentlyRunningModule() {
    const transport = await TransportWebUSB.create();
    const response = await transport.send(0xb0, 0x01, 0x00, 0x00);
    if (response[0] !== 1) {
        console.error('Unsupported response format')
    }

    const runningComponentNameLength = response[1];
    const componentNameEndIndex = runningComponentNameLength + 2;

    const componentName = response.slice(2, componentNameEndIndex).toString('ascii');

    const versionLength = response[componentNameEndIndex];
    const versionEndIndex = componentNameEndIndex + 1 + versionLength;
    const version = response.slice(componentNameEndIndex + 1, versionEndIndex).toString('ascii');

    document.getElementById('runningModuleInfo').innerHTML = `Application: ${componentName} - Version: ${version}`
}

