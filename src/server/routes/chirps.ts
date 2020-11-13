import * as express from 'express'
// import { GetChirp, GetChirps, CreateChirp, UpdateChirp, DeleteChirp } from '../utils/chirpstore';
import db from '../db'


const router: express.Router = express.Router();
// /api/chirps/

router.get('/', async (req, res) => {
    try {
        res.json(await db.Chirps.all());
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

router.get('/:id', async (req, res) => {
    try {
        res.json((await db.Chirps.one(req.params.id))[0]);
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

router.post('/', async (req, res) => {
    try {
        db.Chirps.post();
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

router.put('/:id', async (req, res) => {
    try {
        db.Chirps.update(req.params.id);
        res.sendStatus(200); 
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        db.Chirps.remove(req.params.id)
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
})

// router.get("/", (req: express.Request, res: express.Response) => {
//     let data = GetChirps();
//     const chirps = Object.keys(data).map((key) => {
//         return {
//             id: key,
//             username: data[key].username,
//             message: data[key].message,
//         };
//     });
//     chirps.pop();
//     res.json(chirps);
// });

// router.get("/:id", (req: express.Request, res: express.Response) => {
//     const id: string = req.params.id;
//     const data = GetChirp(id);
//     const chirp = {
//         id: id,
//         username: data.username,
//         message: data.message
//     };
//     res.send(JSON.stringify(chirp));
// });

// router.post('/', (req: express.Request, res: express.Response) => {
//     let chirpObj: chirp = {
//         username: req.body.username,
//         message: req.body.message
//     }
//     CreateChirp(chirpObj);

//     res.sendStatus(200)
// })

// router.put('/:id', (req: express.Request, res: express.Response) => {
//     const id: string = req.params.id;
//     let chirpObj: chirp = {
//         username: req.body.username,
//         message: req.body.message
//     };
//     UpdateChirp(id, chirpObj);

//     res.sendStatus(200);
// })

// router.delete('/:id', (req: express.Request, res: express.Response) => {
//     const id: string = req.params.id;
//     DeleteChirp(id);

//     res.sendStatus(200);
// })

// interface chirp {
//     username: string,
//     message: string
// }

export default router;