const request = require("supertest");
const server = require("../server");

const db = require("../../data/dbConfig");

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

describe("Sanity Check", () => {
  it("is we sane", () => {
    expect(2 + 2).toBe(4);
  });
});

describe("Checking Endpoints", () => {});
