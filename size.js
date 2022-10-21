const { dict } = require('./map');


function handleSize() {
    while(dict.size >= 1000) {
        const iterator = dict.keys();
        dict.delete(iterator.next().key);
        iterator = iterator.next();
    }
}

module.exports = {
    handleSize
};