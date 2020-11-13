import { Query } from './index';

const all = async () => Query('SELECT * FROM users');
const one = async (id: number) => Query('SELECT * FROM users WHERE id = ?', [id])
const post = async () => Query('INSERT INTO users (name, email, password) VALUES ("Bob", "bobmail@email.com", "bobby")')
const update = async (id: number) => Query('UPDATE users SET name = "Jim" WHERE id = ?', [id])
const remove = async (id: number) => Query('DELETE FROM users WHERE id = ?', [id])

export default {
    all,
    one,
    post,
    update,
    remove

}