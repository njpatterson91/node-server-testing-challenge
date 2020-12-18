const Employees = require("./employees-model");
const db = require("../../data/dbConfig");

const employee1 = {
  first_name: "Nathan",
  last_name: "Patterson",
  employee_title: "CEO",
  employee_unit: "Business Management",
  employee_email: "odst0016@gmail.com",
  employee_phone: "555-555-5555",
  employee_pay_rate: "125k salary",
};

const employee1Updated = {
  first_name: "Nathaniel",
  last_name: "Patterson",
  employee_title: "CEO",
  employee_unit: "Business Management",
  employee_email: "odst0016@gmail.com",
  employee_phone: "555-555-5555",
  employee_pay_rate: "125k salary",
};

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db("employees").truncate();
});

afterAll(async () => {
  await db.destroy();
});

describe("Checking Employees Model", () => {
  it("Employees.getAll returns empty array if no employees exist", async () => {
    const results = await Employees.getAll();
    expect(results).toHaveLength(0);
  });
  it("Inserting an employee into the database and verifing proper insertion via response", async () => {
    const results = await Employees.insert(employee1);
    expect(results).toHaveProperty("id", 1);
    expect(results).toMatchObject(employee1);
  });
  it("Checking if update helper function works", async () => {
    await db("employees").insert(employee1);
    const results = await Employees.update(1, employee1Updated);
    expect(results).toHaveProperty("id", 1);
    expect(results).toMatchObject(employee1Updated);
  });
  it("Checking delete helper function", async () => {
    await db("employees").insert(employee1);
    const results = await Employees.remove(1);
    expect(results).toBe(1);
  });
  it("Checking getById helper function", async () => {
    await db("employees").insert(employee1);
    const results = await Employees.getById(1);
    expect(results).toMatchObject(employee1);
  });
  it("Forcing getById failure", async () => {
    const results = await Employees.getById(1);
    expect(results).toBe(undefined);
  });
});
