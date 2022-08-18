import express from 'express';
import bcrypt from 'bcrypt';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../components/Layout';
import { user } from '../db/models';
import authCheck from '../components/middlewares/authCheck';

const route = express.Router();

route.get('/', authCheck, async (req, res) => {
  try {
    const initState = { path: req.originalUrl, userSession: req.session.userSession };
    const html = renderToString(<Layout initState={initState} />);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});

route.post('/', async (req, res) => {
  const databaseUser = await user.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (databaseUser && await bcrypt.compare(req.body.password, databaseUser.password)) {
    // res.json({ ...databaseStudent, hashedPassword: undefined });
    const sessionData = {
      email: databaseUser.email,
      id: databaseUser.id,
    };
    // Object.assign(req.session, sessionData);
    req.session.useEemail = databaseUser.email;
    req.session.userId = databaseUser.id;
    res.json(sessionData);
  } else res.sendStatus(401);
});

route.get('/logout', async (req, res) => {
  res.clearCookie('user_sid'); // Удалить куку
  req.session.destroy(); // Завершить сессию
  res.sendStatus(200);
});

export default route;
