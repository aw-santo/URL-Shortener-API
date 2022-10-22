const Mapper = require("../models/Mapper");


exports.provideUrl = async (req, res) => {
    try {
        const key = req.params.key;

        if (!key || key.length != 6) {
            throw new Error("Invalid Key.")
        }

        const record = await Mapper.findOne({ key: key });
        if (!record) {
            throw new Error("Key Not Found.")
        }

        res.redirect(record.value);
    }
    catch (err) {
        res.json({
            success: false,
            error: err.message
        });
    }
}


exports.uniqueId = async (req, res) => {
    try {
        const keys = await Mapper.find({}).select("key");

        const url = req.body.url;

        if(!url) {
            throw new Error("Request body required.")
        }
        let key = await makeid(url, keys);

        await Mapper.create({
            key: key,
            value: url
        });

        res.json({
            success: true,
            data: key
        });
    }
    catch (err) {
        res.json({
            success: false,
            error: err.message
        });
    }
}


async function makeid(_url, keys) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;

    const dict = new Map();
    for (let key of keys) {
        dict.set(key, 1);
    }

    const rand = () => {
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    }

    rand();
    while (dict.has(result)) {
        result = '';
        rand();
    }

    return result;
}