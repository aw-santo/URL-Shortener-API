const { dict } = require('./map');
const { handleSize } = require('./size');

function makeid(_url) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;

    const rand = () => {
        for ( let i = 0; i < 6; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    }

    rand();
    if(dict.has(result)) {
        result = '';
        rand();
    }
    dict.set(result, _url);
    handleSize();
    return result;
}

module.exports = {
    makeid
};