import Data from './data.js';
import Common from './Common.js';

class Crypto{

  constructor() {
    this.listBitcoinData();
    this.listBitcoinRateAndName();
    this.iLoveCryptoCurrencyElement = document.querySelector(".iLoveCryptoCurrency");
    this.iLoveCryptoCurrencyElement2 = document.querySelector(".someCryptoCurrency");
  }

  async listBitcoinData() {
   let bitCoinData = await Data.getBitcoinData();

   let noteId = "timeElement";
   let iLoveCryptoCurrencyElement = document.querySelector(".iLoveCryptoCurrency");
   let listElement = Common.toDom(`
   <div class="note-list-element" id="${noteId}element">
   ${bitCoinData.display_timestamp}
   </div>
 `);
   iLoveCryptoCurrencyElement.appendChild(listElement)
    }

   async listBitcoinRateAndName(){
      let bitCoinData = await Data.getBitcoinRateAndName();
      for(let currency of Object.keys(bitCoinData.rates)){

       let data = bitCoinData.rates[currency];
       let ratesId = "rateElement";
       let iLoveCryptoCurrencyElement2 = document.querySelector(".someCryptoCurrency");
       let secondListElement = Common.toDom(`<div class="second-note-list" id="${ratesId}">Shows the rate: ${data.rate} and shows the name of the currency ${data.name}</div>`)
       iLoveCryptoCurrencyElement2.appendChild(secondListElement);
       //console.log(currency);
       //console.log(`Shows the rate: ${data.rate} and shows the name of the currency ${data.name}`);

    }
  }
}

export default Crypto;
