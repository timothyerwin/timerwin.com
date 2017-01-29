const express = require('express');
const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const router = express.Router();

const settings = require('../settings');
const logger = require('../logger');

router.post('/contact/message', (req, res) => {
  console.log(settings.mail.api_key);

  const transporter = nodemailer.createTransport(mailgun({
    auth: {
      api_key: settings.mail.api_key,
      domain: 'timerwin.com'
    }
  }));

  transporter.sendMail({
    from: `${req.body.email} <${req.body.email}>`,
    to: 'tim@timerwin.com',
    subject: `Message from ${req.body.email}`,
    text: req.body.message
  }, (err, info) => {
    if (err) {
      logger.error(err);
      res.sendStatus(500);
    } else {
      logger.info(info);
      res.sendStatus(200);
    }
  });
});

module.exports = router;
