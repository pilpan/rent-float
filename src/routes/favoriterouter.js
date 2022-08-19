/* eslint-disable react/jsx-filename-extension */
import express from 'express';
import { favorite, user, flat } from '../db/models';

const route = express.Router();

route.post('/:id', async (req, res) => {
  try {
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
route.put('/add/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.session.userId);
    const {id_user, id_flat} = req.params
    // const = await favorite.create({id_user: userId, id_flat})

  } catch (err) {
    console.error(err);
  }
});

export default route;
