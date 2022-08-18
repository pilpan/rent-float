/* eslint-disable react/jsx-filename-extension */
import express from 'express';
import { favorite, user, flat } from '../db/models';

const route = express.Router();

route.post('/:id', async (req, res) => {
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
    res.json(fav);
  } catch (err) {
    console.error(err);
  }
});

export default route;
