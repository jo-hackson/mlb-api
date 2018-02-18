import express from 'express';
import Child from '../models/Child';
import parseErrors from '../utils/parseErrors';

const router = express.Router();

router.post('/', (req,res) => {
	const { childName, balance } = req.body.child;
	const child = new Child({ childName, balance });
	child
		.save()
		.then(childRecord => {
			res.json({ child: childRecord.toAuthJSON() })
		})
		.catch(err => res.status(400).json({ errors: parseErrors(err.errors) }))
});

export default router;