const fs = require('fs')
const FormData = require('form-data');
const Client = require("./axios");


//
class Cloudflare extends Client{

    static instance;

    constructor() {
        super();
    }
    static getInstance() {
        if (!Cloudflare.instance) {
            Cloudflare.instance = new Cloudflare();
        }
        return Cloudflare.instance;
    }

    async uploadImages(path){
        const file = fs.createReadStream(path); 
        const formData = new FormData();
        formData.append('file', file);
        const result =  await this.client.post('/accounts/099726f17444f118b6b6f15c147a3770/images/v1', formData)
        fs.unlinkSync(path);
        return result;
    }

    deleteImage(imageId) {
        return this.client.delete(`/accounts/0099726f17444f118b6b6f15c147a3770/images/v1/${imageId}`);
    }

    async getImages() {
        const result = await this.client.get('/accounts/099726f17444f118b6b6f15c147a3770/images/v1');
        return result.data.result;
    }
}



module.exports = Cloudflare;