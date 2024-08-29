'use strict';

const quotes = require('./quotes.json');

module.exports = {
    getRandom: function getRandom(numberOfQuotes) {
        const limit = numberOfQuotes > quotes.length ? quotes.length : numberOfQuotes;

        let out = new Array(limit);
        let availableQuotes = quotes.slice(); // Copia del array original para evitar modificarlo

        for (let i = 0; i < limit; i++) {
            // Selecciona una cita aleatoria y la elimina del array disponible
            const randomIndex = Math.floor(Math.random() * availableQuotes.length);
            out[i] = availableQuotes.splice(randomIndex, 1)[0];
        }
        
        return out.length === 1 ? out[0] : out;
    }
};
