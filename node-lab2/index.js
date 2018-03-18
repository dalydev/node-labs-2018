import dotenv from 'dotenv';
import express from 'express';
import contactsRouter from './api/contacts';
import bodyParser from 'body-parser';
import postsRouter from './api/posts';
dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));

app.use('/api/contacts', contactsRouter);
app.use(express.static('public'));
app.use('/api/posts', postsRouter);
//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.listen(port, () => {
  console.info(`Server running at ${port}`);
});