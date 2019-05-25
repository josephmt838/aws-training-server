const express = require('express'),
    api = express(),
    logger = require('morgan'),
    helmet = require('helmet'),
    cors = require('cors');
    require('dotenv').config();


    api.use(cors(), helmet(), logger('dev'));

    api.get("/", (req, res) => {
        const data = {
            body: req.body,
            headers: req.headers
        }
            res.json({message: 'API connected successfully.'})
    })

    module.exports = api;