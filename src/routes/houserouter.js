/* eslint-disable react/jsx-filename-extension */
import express from 'express';
import { flatCategories, user, flat } from '../db/models';

const route = express.Router();

route.post('/add/:id', async (req, res) => {
  try {
    const newFlat = flat.create(
      {
        price: Number(req.body.Price),
        descriptions: req.body.Description,
        img: req.body.Image,
        coordinate: req.body.Adress,
        id_user: req.params.id,
        id_category: 2,
      },
    );
    res.json(newFlat);
  } catch (err) {
    console.error(err);
  }
});
route.get('/edit/:id', async (req, res) => {
  try {
    const findFlat = await flat.findAll({
      include: { model: user },
      where: { id: req.params.id },
    });
    console.log(JSON.parse(JSON.stringify(findFlat)));
  } catch (err) {
    console.error(err);
  }
});

export default route;
