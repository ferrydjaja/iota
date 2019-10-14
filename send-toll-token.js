//Send Toll Tokens to Vehicle

const Iota = require('@iota/core');

const iota = Iota.composeAPI({
	provider: 'https://nodes.devnet.iota.org:443'
});


const tollSeed    = 'WZUPVRWHQCGBWVQLWPZNLSTMQ9KP9IEMZZKDFWLNKJDMQSLYWLYOYEJDOOIHIMFKVRZTQRGGUIOMFAUPM';
const vehicleSeed = 'OZUUIIOCLSDXBBASGTBMWQZULAQXREEWINFLVJXHDFMCINSLRUEJHZYXSWSURYSH99CLRIKOJGWNFEISS';

const main = async () => {

  //You will send your tokens to this address
  const receivingAddress = await iota.getNewAddress(tollSeed, {
    index: 2,
    total: 1
  });

  console.log("receivingAddress: " + receivingAddress);

  const transfers = [
    {
      value: 500,
      address: receivingAddress[0],
      tag: 'PAYTOLL'
    }
  ];


  console.log('Sending 500i to ' + receivingAddress);

  try {
    const trytes = await iota.prepareTransfers(vehicleSeed, transfers); //seed to receive free Devnet tokens

    const response = await iota.sendTrytes(trytes, 3, 9);

    console.log('Bundle sent');

    response.map(tx => console.log(tx));
  } catch (error) {
    console.log(error);
  }
}



main();