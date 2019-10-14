//run cda-toll.js
//paste magnetLink information

const { createAccount }  = require('@iota/account')
const CDA = require('@iota/cda');

const provider = 'https://nodes.devnet.iota.org:443';

const tollSeed    = 'WZUPVRWHQCGBWVQLWPZNLSTMQ9KP9IEMZZKDFWLNKJDMQSLYWLYOYEJDOOIHIMFKVRZTQRGGUIOMFAUPM';
const vehicleSeed = 'OZUUIIOCLSDXBBASGTBMWQZULAQXREEWINFLVJXHDFMCINSLRUEJHZYXSWSURYSH99CLRIKOJGWNFEISS';

const seed = vehicleSeed;     // vehicleSeed

const account = createAccount({
    seed,
    provider
})


const cda = account.generateCDA({
    timeoutAt: Date.now() + 24 * 60 * 60 * 1000,
	expectedAmount: 20
})
.tap(cda => console.log('Sending to:', cda.address))
.then(cda => {
	console.log("CDA")
	console.log(cda)  

	const magnetLink = 'iota://UIGJRPTKGPPQSGQMYNPOXMFXVMUOUAAAPARDYWRCOYPWPNYQLQHDEIWISHKBKIMLWHNEQNJDQZWMZVVP9KUNBGDQJO/?timeout_at=1571138900627&multi_use=0';
    const { address, timeoutAt, multiUse, expectedAmount } = CDA.parseCDAMagnet(magnetLink);

	console.log("--------------Send to CDA-----------")
	account.sendToCDA({
		address,
        timeoutAt,
        multiUse,
        expectedAmount,
        value: 20
	})
	.then((trytes) => {
		console.log('Successfully prepared transaction trytes');
	})
	


})
.catch(err => {
	console.log("err: " + err);
});

account.startAttaching({
    depth: 3,
    minWeightMagnitude : 9,
    delay: 30 * 1000 // 30 second delay
});

/*
// Connect to a node;

const provider = 'https://nodes.devnet.iota.org:443';


const magnetLink = 'iota://PD9QTKAADVXT9QIGZAMAHPFIODAONVGVKHWRRZSQONJKCSDQKX9YVCN9GFELLIWMIEHLLQEOVLXN9PURBVROCHWZRF/?timeout_at=1576203208650&multi_use=1';
const { address, timeoutAt, multiUse, expectedAmount } = CDA.parseCDAMagnet(magnetLink);

console.log('Sending to:', address, timeoutAt, multiUse, expectedAmount);

const seed = 'CUWYBOVOQKJHTLQSETGZXDPULOOHLCASNMWA9UWJ9YYYVAXLHQXWL9ZOGHL9PWCZGFICFPAVSOSMOKKXB';     // vehicle seed

const account = createAccount({
    seed,
    provider
});


function run() {

const cda = account.generateCDA({
    timeoutAt: Date.now() + 24 * 60 * 60 * 1000
})
.then(cda => {
    account.sendToCDA({
        address,
        timeoutAt,
        multiUse,
        expectedAmount,
        value: 150
})
.then((trytes) => {
    console.log('Successfully prepared transaction trytes:', trytes)

    
})
})

}   // end run function


module.exports = {
    run: function(o) { run(o) }
  }
*/