const db = require("../../data/dbConfig");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  getById,
};

function getAll() {
  return db("clients");
}
function getById(id) {
  return db("clients").where("id", id).first();
}
async function insert(data) {
  const id = await db("clients").insert(data);
  return db("clients").where("id", id).first();
}
async function update(id, data) {
  await db("clients").where("id", id).update(data);
  return db("clients").where("id", id).first();
}
async function remove(id) {
  return await db("clients").where("id", id).delete();
}
