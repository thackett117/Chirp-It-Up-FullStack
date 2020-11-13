import { Query } from './index';

const all = async () => Query('SELECT * FROM chirps');
const one = async (id: number) => Query('SELECT * FROM chirps WHERE id = ?', [id])
const post = async () => Query('INSERT INTO chirps (userid, content, location) VALUES (2, "This is a test chirp2", "Hoover")')
const update = async (id: number) => Query('UPDATE chirps SET location = "Pelham" WHERE id = ?', [id])
const remove = async (id: number) => Query('DELETE FROM chirps WHERE id = ?', [id])

export default {
    all,
    one,
    post,
    update,
    remove

}