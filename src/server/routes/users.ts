import * as express from 'express'
// import { GetChirp, GetChirps, CreateChirp, UpdateChirp, DeleteChirp } from '../utils/chirpstore';
import db from '../db'


const router: express.Router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.json(await db.Users.all());
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

// /api/chirps/:id
router.get('/:id', async (req, res) => {
    try {
        res.json((await db.Users.one(req.params.id))[0]);
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

router.post('/', async (req,res) => {
    try {
        db.Users.post();
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.put('/:id', async (req, res) => {
    try {
        db.Users.update(req.params.id);
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        db.Users.remove(req.params.id)
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

export default router