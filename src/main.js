import 'core-js/actual';
import { listen } from "@ledgerhq/logs";

import { displayBtcAddress, displayEthereumAddress, getTariAddress, tariPubAlpha, tariPublicKey } from './addr_display';
import { getCurrentlyRunningModule, quitCurrentlyRunningApplicaiton, openApplication } from './transport'
listen(log => console.log(log))

// App usage
document.getElementById('getEthAddress').addEventListener('click', displayEthereumAddress);
document.getElementById('getBtcAddress').addEventListener('click', displayBtcAddress)
document.getElementById('getTariAddress').addEventListener('click', tariPubAlpha)


// APDU tests 

document.getElementById('getRunningModuleInfo').addEventListener('click', getCurrentlyRunningModule)
document.getElementById('quitCurrentModule').addEventListener('click', quitCurrentlyRunningApplicaiton);

document.getElementById('openAppForm').addEventListener('submit', (event) => {
    openApplication(document.getElementById('appName').value)

    event.preventDefault();
})

