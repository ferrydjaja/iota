const createHttpClient = require('@iota/http-client').createHttpClient;
const createGetAccountData = require('@iota/core').createGetAccountData


const client = new createHttpClient({
    provider: 'https://nodes.devnet.iota.org:443'
})

//cat /dev/urandom |tr -dc A-Z9|head -c${1:-81}

const tollSeed    = 'WZUPVRWHQCGBWVQLWPZNLSTMQ9KP9IEMZZKDFWLNKJDMQSLYWLYOYEJDOOIHIMFKVRZTQRGGUIOMFAUPM';
const vehicleSeed = 'OZUUIIOCLSDXBBASGTBMWQZULAQXREEWINFLVJXHDFMCINSLRUEJHZYXSWSURYSH99CLRIKOJGWNFEISS';

function getAccountData(seed) {
    const getAccountData = createGetAccountData(client)

    getAccountData(seed, { start: 0, end: 10, security: 2})
        .then(accountData => {
            const { latestAddress, addresses, inputs, transactions, balance } = accountData;
			console.log(latestAddress, addresses, inputs, transactions, balance);
			console.log("latestAddress");
			console.log(latestAddress);
			console.log("input");
			console.log(inputs);
        })
        .catch(error => {})
}

//getAccountData(tollSeed)
getAccountData(vehicleSeed)


//https://faucet.devnet.iota.org/
