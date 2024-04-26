import 'core-js/actual';
import { listen } from "@ledgerhq/logs";

import { displayBtcAddress, displayEthereumAddress } from './addr_display';
import { getCurrentlyRunningModule, quitCurrentlyRunningApplicaiton } from './transport'
listen(log => console.log(log))

// App usage
document.getElementById('getEthAddress').addEventListener('click', displayEthereumAddress);
document.getElementById('getBtcAddress').addEventListener('click', displayBtcAddress)


// APDU tests 

document.getElementById('getRunningModuleInfo').addEventListener('click', getCurrentlyRunningModule)
document.getElementById('quitCurrentModule').addEventListener('click', quitCurrentlyRunningApplicaiton);