import express from 'express';
import bcrypt from 'bcrypt';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../components/Layout';
import { user } from '../db/models';

const route = express.Router();

route.get('/', async (req, res) => {
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
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const [currentUser, created] = await user.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      hashedPassword,
      email: req.body.email,
    },
  });
  if (!created) res.json(currentUser);
  else res.json(created);
});

route.get('/signup', async (req, res) => {
  try {
    const initState = { path: req.originalUrl, userSession: req.session.userSession };
    const html = renderToString(<Layout initState={initState} />);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error('blyat');
  }
});

export default route;
