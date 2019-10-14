const { createAccount }  = require('@iota/account')

// Connect to a node;

const provider = 'https://nodes.devnet.iota.org:443';

const tollSeed    = 'WZUPVRWHQCGBWVQLWPZNLSTMQ9KP9IEMZZKDFWLNKJDMQSLYWLYOYEJDOOIHIMFKVRZTQRGGUIOMFAUPM';
const vehicleSeed = 'OZUUIIOCLSDXBBASGTBMWQZULAQXREEWINFLVJXHDFMCINSLRUEJHZYXSWSURYSH99CLRIKOJGWNFEISS';

function getTotalBalance(seed) {
    let account = createAccount({
        seed,
        provider
    });

    account.getTotalBalance()
    .then(balance => {
		console.log(balance); 
		//process.exit(0);
	});    
}


var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

switch (myArgs[0]) {
case 'toll':
    console.log('>>> toll wallet <<<')
    getTotalBalance(tollSeed)
    break;
case 'vehicle':
    console.log('>>> vehicle wallet <<<')
    getTotalBalance(vehicleSeed)
    break;
default:
    console.log('>>> vehicle wallet <<<')
    getTotalBalance(vehicleSeed)
}