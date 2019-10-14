const createHttpClient = require('@iota/http-client').createHttpClient;
const createGetAccountData = require('@iota/core').createGetAccountData


const client = new createHttpClient({

    // replace with your IRI node address 
    // or connect to a Devnet node for testing: 'https://nodes.devnet.iota.org:443'

    provider: 'https://nodes.devnet.iota.org:443'
})


const tollSeed    = 'WZUPVRWHQCGBWVQLWPZNLSTMQ9KP9IEMZZKDFWLNKJDMQSLYWLYOYEJDOOIHIMFKVRZTQRGGUIOMFAUPM';
const vehicleSeed = 'OZUUIIOCLSDXBBASGTBMWQZULAQXREEWINFLVJXHDFMCINSLRUEJHZYXSWSURYSH99CLRIKOJGWNFEISS';

function getAccountData(seed) {
    const getAccountData = createGetAccountData(client)

    getAccountData(seed, { start: 0, end: 30, security: 2})
        .then(accountData => {
            const { addresses, inputs, transactions, balance } = accountData;
            console.log(addresses, inputs, transactions, balance);
        })
        .catch(error => {})
}






//getAccountData(seed)


var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

switch (myArgs[0]) {
case 'toll':
    console.log('>>> toll wallet <<<')
    getAccountData(tollSeed)
    break;
case 'vehicle':
    console.log('>>> vehicle wallet <<<')
    getAccountData(vehicleSeed)
    break;
default:
    console.log('>>> vehicle wallet <<<')
    getAccountData(vehicleSeed)
}