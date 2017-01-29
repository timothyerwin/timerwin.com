const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

const settings = require('../settings');
const logger = require('../logger');

router.post('/contact/message', (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: settings.mail.user,
      pass: settings.mail.pass
    }
  });

  transporter.sendMail({
    from: 'tim@timerwin.com',
    to: 'tim.erwin@gmail.com',
    subject: 'Site Message',
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
