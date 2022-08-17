import express from 'express';
import bcrypt from 'bcrypt';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../components/Layout';
import { user } from '../db/models';

const route = express.Router();

route.get('/login', async (req, res) => {
  try {
    const initState = { path: req.originalUrl, userSession: req.session.userSession };
    const html = renderToString(<Layout initState={initState} />);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});

route.post('/login', async (req, res) => {
  const databaseUser = await user.findOne({
    where: {
      name: req.body.name,
    },
  });
  if (databaseUser && await bcrypt.compare(req.body.password, databaseUser.hashedPassword)) {
    // res.json({ ...databaseStudent, hashedPassword: undefined });
    const sessionData = {
      name: databaseUser.name,
      email: databaseUser.email,
      id: databaseUser.id,
    };
    // Object.assign(req.session, sessionData);
    req.session.userName = databaseUser.name;
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
