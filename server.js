'use strict';

import express from 'express';
import { getRandom } from './quotesRepository';

const app = express();
const port = process.env.PORT || 3001;

// Middleware para permitir CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

// Endpoint para obtener una o más citas aleatorias
app.get('/v1/quotes/:num?', (req, res) => {
    const numQuotes = req.params.num ? parseInt(req.params.num, 10) : 1;
    const quotes = getRandom(numQuotes);
    res.json(quotes);
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
