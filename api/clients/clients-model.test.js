const Clients = require("./clients-model");
const db = require("../../data/dbConfig");

const client = {
  first_name: "John",
  last_name: "Smith",
  client_email: "client@cclieeent.ccc",
  client_phone: "555-145-5555",
};
const clientUpdated = {
  first_name: "Johnathan",
  last_name: "Smith",
  client_email: "client@cclieeent.ccc",
  client_phone: "555-145-5555",
};

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db("clients").truncate();
});

afterAll(async () => {
  await db.destroy();
});

describe("Checking Clients Model", () => {
  it("Clients.getAll returns empty array if no Clients exist", async () => {
    const results = await Clients.getAll();
    expect(results).toHaveLength(0);
  });
  it("Inserting an employee into the database and verifing proper insertion via response", async () => {
    const results = await Clients.insert(client);
    expect(results).toHaveProperty("id", 1);
    expect(results).toMatchObject(client);
  });
  it("Checking if update helper function works", async () => {
    await db("Clients").insert(client);
    const results = await Clients.update(1, clientUpdated);
    expect(results).toHaveProperty("id", 1);
    expect(results).toMatchObject(clientUpdated);
  });
  it("Checking delete helper function", async () => {
    await db("Clients").insert(client);
    const results = await Clients.remove(1);
    expect(results).toBe(1);
  });
  it("Checking getById helper function", async () => {
    await db("Clients").insert(client);
    const results = await Clients.getById(1);
    expect(results).toMatchObject(client);
  });
  it("Forcing getById failure", async () => {
    const results = await Clients.getById(1);
    expect(results).toBe(undefined);
  });
});
