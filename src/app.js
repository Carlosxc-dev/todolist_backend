//imports dos frameworks para funcionamento da aplicacao 
// usanod express para criar servidor
const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

app.use(express.json());    // conseguir trabalhar req, res com json
app.use(cors());            // 
app.use(router);            // toda requisicao do navegador app usa o router para gerenciar

module.exports = app;