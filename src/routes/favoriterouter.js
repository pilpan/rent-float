/* eslint-disable react/jsx-filename-extension */
import express, { json } from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../components/Layout';
import { favorite, user, flat } from '../db/models';

const route = express.Router();

route.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const fav = await favorite.findAll({
      include: [{
        model: user,
      },
      {
        model: flat,
      }],
    });
    const initState = { path: req.originalUrl, data: fav };
    const html = renderToString(<Layout initState={initState} />);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});

export default route;
