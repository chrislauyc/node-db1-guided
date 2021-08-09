const db = require('../../data/db-config')

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  // select * from posts;
  return db('posts')
}

async function getById(id) {
  // return db('posts').where({ id: id, foo: 'bar' })
  return db('posts').where('id', id).first()
}

async function create() {
  return 'create wired'
}

async function update(id, { title, contents }) {
  return 'update wired'
}

async function remove() {
  return 'delete wired'
}
