const router = require('express').Router();
let Test = require('../models/test.model');

router.route('/').get((req, res) => {
	Test.find()
		.then((test) => res.json(test))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const test = req.body.test;

	const newTest = new Test({ test });

	newTest
		.save()
		.then(() => res.json('Test added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
