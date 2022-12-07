const Model = require('./Model');

const findAll = (callback) => {
    Model.find((err, obj) => {
        if(obj) return callback(null, obj);
        return callback({msg: 'Fehler bei findAll', err: err}, null);
    });
};

const createWinner = (body, callback) => {
    let winner = new Model(body);

    winner.save((err, obj) => {
        if(obj) return callback(null, obj);
        return callback({msg: 'Fehler bei createWinner', err: err}, null);
    });
};

module.exports = {
    findAll,
    createWinner
}