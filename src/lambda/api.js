import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';

const app = express();
app.use(cors());

const router = express.Router();

router.get('/', (req, res) => {
	res.json({ message: `Hello world ${Math.floor(Math.random() * 10)}` });
});

app.use('/.netlify/functions/api', router);

export const handler = serverless(app);
