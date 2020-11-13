import { Query } from './index';

const all = async () => Query(`SELECT * FROM users`);

const one = async (id: number) => Query(`SELECT * FROM users WHERE id = ?`, [id])

const post = async (name: string, email: string, password: string) => Query(`
    INSERT INTO users (name, email, password) 
    VALUES (?, ?, ?)
    `, [name, email, password])

const update = async (id: number, name: string, email: string) => Query(`
    UPDATE users 
    SET name = ?, email = ?
    WHERE id = ?
    `, [name, email, id])

const remove = async (id: number) => Query(`DELETE FROM users WHERE id = ?`, [id])

export default {
    all,
    one,
    post,
    update,
    remove

}