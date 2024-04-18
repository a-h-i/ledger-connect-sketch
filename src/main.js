import 'core-js/actual';
import { listen } from "@ledgerhq/logs";

import { displayBtcAddress, displayEthereumAddress } from './addr_display';
listen(log => console.log(log))

document.getElementById('getEthAddress').addEventListener('click', displayEthereumAddress);
document.getElementById('getBtcAddress').addEventListener('click', displayBtcAddress)