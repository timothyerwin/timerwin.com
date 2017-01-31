const express = require('express');

const instagram = require('instagram-scraper');

const router = express.Router();

const logger = require('../logger');

router.get('/instagram/media', (req, res) => {
  instagram('timerwinofficial').media().then((results) => {
    res.json(results);
  }).catch(err => logger.error(err));
});

module.exports = router;
