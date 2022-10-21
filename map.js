const dict = new Map();

dict.set('goo', 'https://google.com/');

function makeid() {
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
    
    return result;
}

module.exports = {
    dict
};