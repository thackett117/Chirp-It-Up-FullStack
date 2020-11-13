import { Query } from './index';

const all = async () => Query(`
    SELECT
        chirps.*,
        users.name
    FROM chirps 
    JOIN users on users.id = chirps.userid
    `);

const one = async (id: number) => Query(`
    SELECT * FROM chirps 
    WHERE id = ?
    `, [id])

const post = async (userid: string, content: string, location: string) => Query(`
    INSERT INTO chirps (userid, content, location) 
    VALUES (?, ?, ?)
    `, [userid, content, location])

const update = async (id: number, content: string) => Query(
    `UPDATE chirps SET content = ? WHERE id = ?
    `, [content, id])

const remove = async (id: number) => Query(`DELETE FROM chirps WHERE id = ?`, [id])


export default {
    all,
    one,
    post,
    update,
    remove

}