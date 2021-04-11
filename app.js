const express = require('express');
const queue = require('express-queue');
const bodyParser = require('body-parser');
const app = express();

const mt_rand = (min, max) => {
	const argc = arguments.length;
	if (argc === 0) {
		min = 0;
		max = 2147483647;
	} else if (argc === 1) {
		throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');
	} else {
		min = parseInt(min, 10);
		max = parseInt(max, 10);
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

let cnt = 0;
app.get('/api/queued', queue({activeLimit: 1, queuedLimit: -1}), (req, res) => {
	console.log('start');
	setTimeout(() => {
		res.end((++cnt).toString());
	}, mt_rand(0, 50));
});

app.get('/api/not_queued', (req, res) => {
	console.log('start');
	setTimeout(() => {
		res.end((++cnt).toString());
	}, mt_rand(0, 50));
});
app.use((req, res) => res.status(404).end());

app.listen(80);
