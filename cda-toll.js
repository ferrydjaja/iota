// Run this one first before you run pay-toll.js
//https://docs.iota.org/docs/iota-js/0.1/account-module/how-to-guides/create-and-manage-cda

const { createAccount }  = require('@iota/account')
const CDA = require('@iota/cda');

const provider = 'https://nodes.devnet.iota.org:443';

const tollSeed    = 'WZUPVRWHQCGBWVQLWPZNLSTMQ9KP9IEMZZKDFWLNKJDMQSLYWLYOYEJDOOIHIMFKVRZTQRGGUIOMFAUPM';
const vehicleSeed = 'OZUUIIOCLSDXBBASGTBMWQZULAQXREEWINFLVJXHDFMCINSLRUEJHZYXSWSURYSH99CLRIKOJGWNFEISS';


const seed = tollSeed;     // tollSeed 

const account = createAccount({
    seed,
    provider
})


const cda = account.generateCDA({
    timeoutAt: Date.now() + 24 * 60 * 60 * 1000
})
.tap(cda => console.log('Sending to:', cda.address))
.then(cda => {
	console.log("CDA")
	console.log(cda)  

	const magnetLink = CDA.serializeCDAMagnet(cda);
	console.log("magnetLink:" + magnetLink);

	//const { address, timeoutAt, multiUse, expectedAmount } = CDA.parseCDAMagnet(magnetLink);

})
.catch(err => {
	console.log("err: " + err);
});
