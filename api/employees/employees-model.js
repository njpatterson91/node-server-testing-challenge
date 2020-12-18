const db = require("../../data/dbConfig");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  getById,
};

function getAll() {
  return db("employees");
}
function getById(id) {
  return db("employees").where("id", id).first();
}
async function insert(data) {
  const id = await db("employees").insert(data);
  return db("employees").where("id", id).first();
}
async function update(id, data) {
  await db("employees").where("id", id).update(data);
  return db("employees").where("id", id).first();
}
async function remove(id) {
  return await db("employees").where("id", id).delete();
}
