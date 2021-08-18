const db = require("../../data/db-config");
module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  return db("post");
}

async function getById(id) {
  return db("post").where({id}).first();
}

async function create({title,contents}) {
  const [id] = await db("post").insert({title,contents});
  return getById(id);
}

async function update(id,{title,contents}) {
  await db("post").where({id}).update({title,contents});
  return getById(id);
}

async function remove(id) {
  const post = await getById(id);
  await db("post").where({id}).delete(id);
  return post;
}
