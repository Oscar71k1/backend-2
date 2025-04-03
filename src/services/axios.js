const axios = require('axios');

class Client {
    client;

    constructor() {
        this.client = axios.create({
            baseURL: 'https://api.cloudflare.com/client/v4',
            headers: {
                'Authorization': 'Bearer VDBdLLrQDD_f2fvjRxQNEiqAWTxSyzcgrq5GspGq'
            }
            
        })
    }
  
    
}
module.exports = Client;