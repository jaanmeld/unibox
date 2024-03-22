// run > node src/server.js

import express from 'express';
import { ImapFlow } from 'imapflow';
import * as dotenv from 'dotenv';

dotenv.config();
const { HOST, PORT, SECURE, USER, PASS } = process.env;

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; // only in development

const app = express();
app.get('/emails', async (req, res) => {
  const client = new ImapFlow({
    host: HOST,
    port: PORT,
    secure: SECURE,
    auth: {
      user: USER,
      pass: PASS
    }
  });
  await client.connect();
  const mailbox = await client.mailboxOpen('INBOX');
  const messages = await client.fetch('1:*', { envelope: true, limit: 10 });
  const subjects = [];
  for await (const message of messages) {
    subjects.push(message.envelope.subject);
  }
  await client.logout();
  res.json(subjects);
});
app.listen(3000, () => console.log('Email server started listening'));
