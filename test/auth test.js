const request = require("supertest");
const app = require("../server");

describe("POST /api/auth/register", () => {

  it("rejects a bad email (400)", async () => {

    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "asha",
        email: "abc",
        password: "secret123",
        gender:"female",
        mobile:"1234567890",
        Address:"bengaluru",
        Pincode:"560100"
      });

    expect(res.status).toBe(400);
  });

});