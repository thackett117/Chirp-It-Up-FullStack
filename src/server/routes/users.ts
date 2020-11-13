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
        let userObj = {
            name: req.body.name,
            email: req.body.email,
            password: "password"
        }
        db.Users.post(userObj.name, userObj.email, userObj.password);
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let newUser = {
            id: req.params.id,
            name: req.body.name,
            email: req.body.email
        }
        db.Users.update(req.params.id, newUser.name, newUser.email);
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