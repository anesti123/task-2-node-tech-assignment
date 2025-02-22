import request from "supertest";
import app from "../src/app";

describe("Simple Greet API Tests", () => {
  // Test case to check if greetController returns a default message when no 'name' is provided
  test("GET /greet without a name should return 'Hello, World!'", async () => {
    const response = await request(app).get("/greet");  // GET request without the 'name' query param
    expect(response.status).toBe(200);  // Expect status code 200 (OK)
    expect(response.body.message).toBe("Hello, World!");  // Expect the response message to be 'Hello, World!'
  });
});
