import express from 'express';
import morgan from 'morgan';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from './components/Layout';
import loginrouter from './routes/loginroute';
import regrouter from './routes/regrouter';
// npm i express-session session-file-store
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));

app.use('/login', loginrouter);
app.use('/register', regrouter);
app.get('/', async (req, res) => {
  try {
    const initState = { path: req.originalUrl };
    const html = renderToString(<Layout initState={initState} />);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});
app.get('/houses/:id', async (req, res) => {
  try {
    const initState = { path: req.originalUrl };
    const html = renderToString(<Layout initState={initState} />);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`));
