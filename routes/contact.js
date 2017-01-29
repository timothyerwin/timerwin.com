const express = require('express');
const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');
const validator = require('validator');

const router = express.Router();

const settings = require('../settings');
const logger = require('../logger');

const required = require('../required');

router.post('/contact/message', (req, res) => {
  required(req, ['email', 'message']).then(() => {
    if (!validator.isEmail(req.body.email)) {
      res.status(500).json({error: 'Email is not valid'});
    } else if (validator.isEmpty(req.body.message)) {
      res.status(500).json({error: 'Message is empty'});
    } else {
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
    }
  }).catch((e) => {
    res.status(500).send(e);
  });
});

module.exports = router;
