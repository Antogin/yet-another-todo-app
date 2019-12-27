import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { TodoModel } from './ressources/todo.model';
require('dotenv').config();
require('./utils/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const router = express.Router();

router.get('/', (req, res) => {
	res.json({ message: `Hello world ${Math.floor(Math.random() * 10)}` });
});

router.post('/todo', (req, res) => {
	TodoModel.create(req.body)
		.then((data) => {
			res.json(data);
		})
		.catch((e) => console.error(e));
});

router.get('/todos', (req, res) => {
	TodoModel.find({}).then((data) => {
		res.json(data);
	});
});

router.put('/todos', ({ body }, res) => {
	TodoModel.findOneAndUpdate({ _id: body }, body, { new: true }).then((data) => {
		res.json(data);
	});
});

router.delete('/todos', ({ body }, res) => {
	TodoModel.findOneAndRemove({ _id: body }).exec().then((data) => {
		res.json(data);
	});
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
